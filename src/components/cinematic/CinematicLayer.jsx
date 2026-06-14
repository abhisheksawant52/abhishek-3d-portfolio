/**
 * CinematicLayer.jsx
 * Three.js floating bokeh/particle layer — warm orange + white glowing
 * particles with additive blending and mouse parallax.
 */
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 180

export default function CinematicLayer() {
  const mountRef = useRef(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // ── Scene / Camera ──
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 200)
    camera.position.set(0, 0, 40)

    // ── Particle geometry ──
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors    = new Float32Array(PARTICLE_COUNT * 3)
    const sizes     = new Float32Array(PARTICLE_COUNT)
    const phases    = new Float32Array(PARTICLE_COUNT)  // for sine wave

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 80
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30

      // Warm orange (#f97316) vs warm white (#fef3c7)
      const warm = Math.random()
      if (warm > 0.45) {
        colors[i * 3]     = 0.98   // orange-ish
        colors[i * 3 + 1] = 0.45 + Math.random() * 0.2
        colors[i * 3 + 2] = 0.08
      } else {
        colors[i * 3]     = 1.0    // warm white
        colors[i * 3 + 1] = 0.95
        colors[i * 3 + 2] = 0.82
      }

      sizes[i]  = 1.8 + Math.random() * 4.5
      phases[i] = Math.random() * Math.PI * 2
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3))
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes,     1))

    // Soft circle texture
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 64
    const ctx = canvas.getContext('2d')
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    grad.addColorStop(0,   'rgba(255,255,255,1)')
    grad.addColorStop(0.4, 'rgba(255,200,120,0.6)')
    grad.addColorStop(1,   'rgba(255,200,120,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 64, 64)
    const tex = new THREE.CanvasTexture(canvas)

    const mat = new THREE.PointsMaterial({
      size:            0.9,
      map:             tex,
      vertexColors:    true,
      transparent:     true,
      blending:        THREE.AdditiveBlending,
      depthWrite:      false,
      sizeAttenuation: true,
      opacity:         0.75,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // ── Mouse parallax ──
    let mouseX = 0, mouseY = 0
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // ── Resize ──
    const onResize = () => {
      if (!el) return
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Animation loop ──
    let rafId
    const posArr = geo.attributes.position.array
    const clock  = new THREE.Clock()

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Float each particle with sine wave
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        posArr[i * 3 + 1] += 0.012 * Math.sin(t * 0.6 + phases[i])
        // wrap vertically
        if (posArr[i * 3 + 1] > 28)  posArr[i * 3 + 1] = -28
        if (posArr[i * 3 + 1] < -28) posArr[i * 3 + 1] =  28
      }
      geo.attributes.position.needsUpdate = true

      // Slow camera parallax
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.018
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.018
      camera.lookAt(scene.position)

      // Gentle rotation
      points.rotation.y = t * 0.018
      points.rotation.x = t * 0.008

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize',    onResize)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      tex.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  )
}

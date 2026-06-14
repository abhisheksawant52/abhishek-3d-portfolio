import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Wireframe } from '@react-three/drei'

function IcosahedronMesh({ mouseX, mouseY, reducedMotion }) {
  const meshRef = useRef()
  const wireRef = useRef()
  const speed = reducedMotion ? 0.002 : 0.008

  useFrame(() => {
    if (!meshRef.current) return

    // Continuous rotation
    meshRef.current.rotation.y += speed
    meshRef.current.rotation.x += speed * 0.5

    // Mouse parallax — nudge toward mouse position
    meshRef.current.rotation.y += (mouseX * 0.0005 - meshRef.current.rotation.y) * 0.05
    meshRef.current.rotation.x += (mouseY * 0.0003 - meshRef.current.rotation.x) * 0.05

    // Keep wireframe mesh in sync
    if (wireRef.current) {
      wireRef.current.rotation.y = meshRef.current.rotation.y
      wireRef.current.rotation.x = meshRef.current.rotation.x
    }
  })

  return (
    <>
      {/* Solid mesh with translucent pink material */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#e91e8c" opacity={0.15} transparent />
        <Wireframe stroke="#e91e8c" thickness={0.02} />
      </mesh>
    </>
  )
}

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  } catch {
    return false
  }
}

export default function FloatingGeometry() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [webGLSupported, setWebGLSupported] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setWebGLSupported(detectWebGL())

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)

    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (!webGLSupported) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-accent-maroon/20 to-accent-pink/10" />
    )
  }

  return (
    <div
      className="absolute inset-0"
      onMouseMove={(e) => {
        setMouseX(e.clientX - window.innerWidth / 2)
        setMouseY(e.clientY - window.innerHeight / 2)
      }}
    >
      <Suspense fallback={<div className="absolute inset-0 animate-pulse bg-gradient-to-br from-accent-maroon/10 to-accent-pink/5" />}>
        <Canvas camera={{ position: [0, 0, 6] }} gl={{ alpha: true }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#e91e8c" intensity={1} />
          <IcosahedronMesh mouseX={mouseX} mouseY={mouseY} reducedMotion={reducedMotion} />
        </Canvas>
      </Suspense>
    </div>
  )
}

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function TorusMesh() {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.01
    // Sine-wave Y float
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.5, 0.4, 16, 60]} />
      <meshBasicMaterial color="#e91e8c" wireframe />
    </mesh>
  )
}

export default function RotatingTorus() {
  return (
    <div className="w-full h-64">
      <Suspense fallback={<div className="w-full h-64 animate-pulse bg-gradient-to-r from-accent-maroon/20 to-accent-pink/10 rounded-lg" />}>
        <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} color="#e91e8c" intensity={2} />
          <TorusMesh />
        </Canvas>
      </Suspense>
    </div>
  )
}

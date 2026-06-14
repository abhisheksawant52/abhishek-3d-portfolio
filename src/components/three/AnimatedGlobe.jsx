import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Globe() {
  const solidRef = useRef()
  const wireRef = useRef()

  useFrame(() => {
    if (solidRef.current) solidRef.current.rotation.y += 0.004
    if (wireRef.current) wireRef.current.rotation.y += 0.004
  })

  return (
    <>
      {/* Solid sphere with translucent material */}
      <mesh ref={solidRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#1e1e1e"
          opacity={0.8}
          transparent
          emissive="#8b1a4a"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[2.01, 16, 16]} />
        <meshBasicMaterial color="#e91e8c" wireframe opacity={0.4} transparent />
      </mesh>
    </>
  )
}

export default function AnimatedGlobe() {
  return (
    <div className="w-full h-80">
      <Suspense fallback={<div className="w-full h-80 animate-pulse bg-gradient-to-r from-accent-maroon/20 to-accent-pink/10 rounded-full" />}>
        <Canvas camera={{ position: [0, 0, 6] }} gl={{ alpha: true }}>
          <ambientLight intensity={0.3} />
          {/* Atmosphere glow */}
          <pointLight position={[3, 3, 3]} color="#e91e8c" intensity={3} />
          <pointLight position={[-3, -3, -3]} color="#8b1a4a" intensity={1} />
          <Globe />
        </Canvas>
      </Suspense>
    </div>
  )
}

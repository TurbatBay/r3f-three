'use client'
// Sphere.tsx
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

type SphereProps = {
  position: [number, number, number]
  color: string
  texture: string
  radius: number
  torusPosition: [number, number, number] // Add this prop
  torusX: number
}

function Sphere({
  position,
  color,
  texture,
  radius,
  torusPosition,
  torusX,
}: SphereProps) {
  const sphereRef: any = useRef<THREE.Mesh>()

  const [map] = useTexture([texture])

  useFrame(({ clock }) => {
    // Animate the spheres by changing their positions
    const t = clock.getElapsedTime()
    sphereRef.current.position.x = Math.sin(t) * torusX
    sphereRef.current.position.y = Math.cos(t) * -torusX
  })

  return (
    <mesh ref={sphereRef} position={position} receiveShadow castShadow>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial
        color={color}
        // map={map}
        metalness={0.1}
        roughness={0}
      />
    </mesh>
  )
}

export default Sphere

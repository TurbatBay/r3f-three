'use client'
import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import golf from '../public/golf.jpg'
import { useTexture } from '@react-three/drei'

type SphereProps = {
  position: [number, number, number]
  color: string
}

function ReverseSphere({ position, color }: SphereProps) {
  const sphereRef: any = useRef<THREE.Mesh>()

  const [map] = useTexture(['/golf.jpg'])

  useFrame(({ clock }) => {
    // Animate the spheres by changing their positions
    const t = clock.getElapsedTime()
    sphereRef.current.position.x = Math.sin(t) * -2
    sphereRef.current.position.y = Math.cos(t) * 2
  })

  return (
    <mesh ref={sphereRef} position={position} castShadow receiveShadow>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color={color}
        map={map}
        metalness={0.5}
        roughness={0.1}
      />
    </mesh>
  )
}

export default ReverseSphere

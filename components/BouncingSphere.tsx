import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader } from 'three'

type BouncingSphereProps = {
  bounceHeight: number
  sphereSize: number
  direction: number // Add a direction prop in radians
  xSpeed: number // Add a speed factor for the X-axis
}

function BouncingSphere({
  bounceHeight,
  sphereSize,
  direction,
  xSpeed,
}: BouncingSphereProps) {
  const sphereRef = useRef<Mesh>()

  const texture = useLoader(TextureLoader, '/paper.jpg')

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const yPos = Math.sin(t) * bounceHeight + 2
    const xPos = Math.cos(t + direction) * sphereSize * xSpeed // Adjust X-axis speed
    if (sphereRef.current) {
      sphereRef.current.position.y = yPos
      sphereRef.current.position.x = xPos
    }
  })

  return (
    <mesh ref={sphereRef} castShadow receiveShadow position={[-2, 4, 4]}>
      <sphereGeometry args={[sphereSize, 16, 16]} />
      <meshPhysicalMaterial
        color={'white'}
        toneMapped={false}
        metalness={0.2}
        roughness={0}
      />
    </mesh>
  )
}

export default BouncingSphere

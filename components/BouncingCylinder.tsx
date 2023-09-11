import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

type BouncingCylinderProps = {
  bounceHeight: number
  cylinderSize: number
}

function BouncingCylinder({
  bounceHeight,
  cylinderSize,
}: BouncingCylinderProps) {
  const cylinderRef = useRef<Mesh>()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const yPos = Math.sin(t) * bounceHeight
    if (cylinderRef.current) {
      cylinderRef.current.position.y = yPos + 4.7
    }
  })

  return (
    <mesh ref={cylinderRef} castShadow receiveShadow position={[0, 30, 0]}>
      <cylinderGeometry args={[cylinderSize, cylinderSize, 0.5, 32]} />
      <meshPhysicalMaterial
        color={'white'}
        toneMapped={false}
        metalness={0.2}
        roughness={0}
      />
    </mesh>
  )
}

export default BouncingCylinder

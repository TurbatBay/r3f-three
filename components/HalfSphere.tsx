import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide } from 'three'
import CirleRotating from './CircleRotating'

function HalfSphere({ position }) {
  const meshRef = useRef()

  useFrame(() => {
    // meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <group>
      <mesh ref={meshRef} position={position} castShadow receiveShadow>
        <sphereGeometry args={[0.8, 16, 16, 0, Math.PI]} />

        <meshStandardMaterial
          color='white'
          metalness={0.1}
          roughness={0}
          side={DoubleSide}
        />
      </mesh>
      <CirleRotating position={[10, 10, -5]} />
      {/* <mesh position={[10, 10, -5]}>
        <circleGeometry args={[5, 32]} />

        <meshStandardMaterial
          color='red'
          metalness={0.1}
          roughness={0}
          side={DoubleSide}
        />
      </mesh> */}
    </group>
  )
}

export default HalfSphere

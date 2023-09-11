import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide } from 'three'

function CirleRotating({ position }) {
  const meshRef = useRef()

  useFrame(() => {
    // meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <group>
      <mesh ref={meshRef} position={[10, 10, -5]}>
        <circleGeometry args={[0.8, 32]} />

        <meshStandardMaterial
          color='white'
          metalness={0.1}
          roughness={0}
          side={DoubleSide}
        />
      </mesh>
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

export default CirleRotating

import { Cylinder } from '@react-three/drei'
import React from 'react'

const GlassCylinder = ({ xAxis }) => {
  return (
    <group position={[3, 10, 5]} scale={0.75}>
      <mesh position={[xAxis, 0.3, 0]} rotation-x={Math.PI / -2}>
        <sphereGeometry args={[0.2, 32, 16, 0, Math.PI]} />{' '}
        {/* Create a half-sphere */}
        <meshPhysicalMaterial
          transparent
          roughness={0}
          transmission={1}
          thickness={2}
        />
      </mesh>
      <Cylinder args={[0.2, 0.2, 6]} position={[xAxis, -2.7, 0]}>
        <meshPhysicalMaterial
          transparent
          roughness={0}
          transmission={1}
          thickness={2}
        />
      </Cylinder>
      <mesh position={[xAxis, -5.7, 0]} rotation-x={Math.PI / 2}>
        <sphereGeometry args={[0.2, 32, 16, 0, Math.PI]} />{' '}
        {/* Create a half-sphere */}
        <meshPhysicalMaterial
          transparent
          roughness={0.14}
          transmission={1}
          thickness={2}
          clearcoat={1}
        />
      </mesh>
    </group>
  )
}

export default GlassCylinder

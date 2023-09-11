import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide } from 'three'
import { MeshReflectorMaterial, useTexture } from '@react-three/drei'

function StaticSphere() {
  const [map] = useTexture(['/steel-texture.jpg'])

  return (
    <group>
      <mesh position={[0, 0, -1.2]} rotation={[Math.PI / 2, 2, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={5}
          depthScale={1}
          minDepthThreshold={0.85}
          color='white'
          metalness={0.85}
          roughness={0.1}
          mirror={0}
          map={map}
        />
      </mesh>
    </group>
  )
}

export default StaticSphere

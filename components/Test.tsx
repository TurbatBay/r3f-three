'use client'
import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Gltf,
  MeshReflectorMaterial,
  OrbitControls,
  Stage,
} from '@react-three/drei'
const Test = () => {
  return (
    <div className='h-screen'>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
      >
        <OrbitControls />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#050505'
            metalness={0.5}
            mirror={0}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Test

// <Canvas
//        shadows
//        gl={{ antialias: false }}
//        dpr={[1, 1.5]}
//        camera={{ position: [4, -1, 8], fov: 35 }}
//      >
//        <color attach='background' args={['skyblue']} />
//        <Stage
//          intensity={0.5}
//          preset='rembrandt'
//          shadows={{
//            type: 'accumulative',
//            color: 'skyblue',
//            colorBlend: 2,
//            opacity: 10,
//          }}
//          adjustCamera={1}
//          environment='city'
//        >
//          <mesh castShadow receiveShadow position={[0.4, 0.3, 0.2]}>
//            <sphereGeometry args={[0.25, 42, 42]} />
//            <meshStandardMaterial color='lightblue' />
//          </mesh>
//          <mesh castShadow receiveShadow>
//            <sphereGeometry args={[0.25, 64, 64]} />
//            <meshStandardMaterial color='lightblue' />
//          </mesh>
//        </Stage>
//        <OrbitControls
//          minPolarAngle={0}
//          maxPolarAngle={Math.PI / 1.9}
//          makeDefault
//        />
//      </Canvas>

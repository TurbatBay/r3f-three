'use client'
import React, { useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  Gltf,
  OrbitControls,
  Stars,
  Stage,
  Plane,
  Cylinder,
  MeshTransmissionMaterial,
  Tube,
  Box,
  ContactShadows,
  Environment,
  Circle,
  Lightformer,
  RoundedBox,
  useTexture,
  MeshReflectorMaterial,
} from '@react-three/drei'
import Sphere from './Sphere'
import BouncingSphere from './BouncingSphere'
import HalfSphere from './HalfSphere'
import BouncingCylinder from './BouncingCylinder'
import GlassCylinder from './GlassCylinder'
import { CatmullRomCurve3 } from 'three'
import * as THREE from 'three'

function MyAnimatedBox() {
  const curve = new CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0), // Start point
    new THREE.Vector3(0, 5, 0), // Middle point (adjust the height here)
    new THREE.Vector3(0, 14, 0), // End point
  ])

  return (
    <section className='h-screen '>
      <Canvas dpr={1} shadows camera={{ position: [-2, 0, 32], fov: 45 }}>
        <color attach='background' args={['#d1d0d4']} />
        <ambientLight intensity={1} />
        <pointLight
          intensity={3500}
          position={[-20, 30, 15]}
          castShadow
          color='white'
          decay={2}
        />
        {/* 
        <spotLight
          intensity={20000}
          position={[-40, 30, 40]}
          castShadow
          color='white'
          distance={2000}
          angle={5}
        /> */}
        <spotLight
          intensity={3000}
          position={[60, 60, -60]}
          castShadow
          color='white'
          distance={300}
          angle={10}
        />
        {/* ard tal */}
        <spotLight
          intensity={5000}
          position={[0, 60, -60]}
          castShadow
          color='white'
          distance={300}
          angle={10}
        />
        {/* <directionalLight intensity={0.2} /> */}
        {/* <Stage
          intensity={0.1}
          shadows={{
            type: 'contact',
            color: 'black',
            colorBlend: 1,
            opacity: 1.6,
          }}q
          receiveShadow={true}
          castShadow
          adjustCamera={1.2}
        > */}
        <OrbitControls makeDefault />

        {/* <Stars /> */}

        {/* MAIN GROUP */}

        <group position={[-3, -2, 0]}>
          <group>
            <Sphere
              position={[0, 0, 0]}
              color='white'
              texture={'/silver-metal.jpg'}
              radius={0.8}
              torusPosition={[-2, 0, 0]}
              torusX={5}
            />

            {/* Second Sphere */}
            <Sphere
              position={[0, 0, 0]} // Adjust the position
              color='white'
              texture='/silver-metal.jpg'
              radius={0.6}
              torusX={-5}
              torusPosition={[0, 2, 2]} // Adjust the torus position
            />
            <mesh castShadow receiveShadow>
              <torusGeometry args={[5, 0.15, 16, 100]} />
              <meshPhysicalMaterial
                toneMapped={false}
                metalness={0.2}
                roughness={0}
              />
            </mesh>
          </group>

          {/* Second Sphere Scene */}

          <group position={[4, 5, -2]} castShadow receiveShadow>
            <Sphere
              position={[0, 0, 0]}
              color='white'
              texture='/silver-metal.jpg'
              radius={0.6}
              torusX={-4}
              torusPosition={[0, 2, 2]} // Pass the position of the second torus here
            />
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
              <torusGeometry args={[4, 0.15, 16, 100]} />
              <meshPhysicalMaterial
                toneMapped={false}
                metalness={0.2}
                roughness={0}
              />
            </mesh>
          </group>

          {/* FIRST SPHERE */}

          <group position={[-8, 9, -9]} castShadow={true} receiveShadow={true}>
            <BouncingSphere
              bounceHeight={0.4}
              sphereSize={0.7}
              direction={Math.PI / -2}
              xSpeed={1}
            />
          </group>

          {/* SECOND SPHERE */}

          <group position={[-3, 5, 2]} castShadow={true} receiveShadow={true}>
            <BouncingSphere
              bounceHeight={0.1}
              sphereSize={1.5}
              direction={Math.PI / 1}
              xSpeed={0.1}
            />
          </group>

          {/* THIRD SPHERE */}

          <group position={[4, 2, -2]} castShadow={true} receiveShadow={true}>
            <BouncingSphere
              bounceHeight={0.6}
              sphereSize={3}
              direction={Math.PI / -5}
              xSpeed={0.3}
            />
          </group>

          {/* Static Sphere */}

          <mesh castShadow receiveShadow position={[-4, -5.5, 4]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshPhysicalMaterial
              color={'white'}
              toneMapped={false}
              metalness={0.2}
              roughness={0}
            />
          </mesh>

          {/* PLANE */}
          <group>
            <Plane
              args={[5, 7]}
              position={[-5, 7, -4.5]}
              castShadow
              receiveShadow
            >
              <MeshTransmissionMaterial
                transparent
                resolution={512}
                thickness={10}
                anisotropy={0.1}
                chromaticAberration={1}
                distortionScale={0}
                temporalDistortion={0}
                side={THREE.DoubleSide}
              />
            </Plane>
          </group>

          {/* CIRCLE GLASS  */}

          <Circle args={[2, 32]} position={[-4, 2, 1]} castShadow receiveShadow>
            <MeshTransmissionMaterial
              transparent
              resolution={1024}
              thickness={6}
              anisotropy={0.1}
              chromaticAberration={0.3}
              distortionScale={0}
              temporalDistortion={0}
              side={THREE.DoubleSide}
            />
          </Circle>

          {/* Bouncing cylinders */}

          <group position={[7, -6, -7]} castShadow={true} receiveShadow={true}>
            <BouncingCylinder bounceHeight={0.5} cylinderSize={1.5} />
            <Cylinder args={[1.5, 1.5, 3]} position={[0, 2, 0]} receiveShadow>
              <meshPhysicalMaterial
                color={'white'}
                toneMapped={false}
                metalness={0.2}
                roughness={0}
              />
            </Cylinder>
            <ContactShadows
              opacity={0.5}
              scale={10}
              blur={10}
              far={10}
              resolution={256}
              color='#000000'
            />

            {/* <Environment preset='city' /> */}
          </group>

          {/* DEWSGER PLANE */}

          <RoundedBox
            args={[130, 130, 200]}
            radius={50}
            position={[10, 59, -5]}
            receiveShadow
          >
            <meshLambertMaterial
              attach='material'
              color={'#d1d0d4'}
              side={THREE.DoubleSide}
            />
          </RoundedBox>
          {/* <Environment background near={1} far={60} resolution={256}>
            <mesh scale={70}>
              <sphereGeometry args={[1, 64, 64]} />
              <meshBasicMaterial color={'red'} side={THREE.BackSide} />
            </mesh>
          </Environment> */}

          {/* 3 glass cylinders */}
          <group>
            <GlassCylinder xAxis={-1} />
            <GlassCylinder xAxis={-0.2} />
            <GlassCylinder xAxis={0.6} />
          </group>

          {/* Shilen bagna */}
          <group position={[-2, -3.5, 2]}>
            <Tube args={[curve, 2, 0.5, 8]} castShadow receiveShadow>
              <meshPhysicalMaterial
                transparent
                roughness={0.14}
                transmission={1}
                thickness={5}
                clearcoat={1}
              />
            </Tube>
            <Cylinder
              args={[1.2, 1.2, 3]}
              position={[0, -1, 0]}
              castShadow
              receiveShadow
            >
              <meshPhysicalMaterial
                color={'white'}
                toneMapped={false}
                metalness={0.2}
                roughness={0}
              />
            </Cylinder>
          </group>
          <group position={[0, -6, 0]}>
            <Box
              args={[12, 8, 0.6]}
              castShadow
              receiveShadow
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshPhysicalMaterial
                color={'white'}
                toneMapped={false}
                metalness={0.2}
                roughness={0}
              />
            </Box>
            <Box
              position={[0, 0.2, 0]}
              args={[12, 4, 0.5]}
              rotation={[Math.PI / 2, 0, 0]}
              castShadow
              receiveShadow
            >
              <MeshTransmissionMaterial
                transparent
                resolution={1024}
                thickness={6}
                anisotropy={0.1}
                chromaticAberration={0.3}
                distortionScale={0}
                temporalDistortion={0}
                side={THREE.DoubleSide}
              />
            </Box>
          </group>

          {/* LEFT SILVER STATIC BALL */}

          <group position={[-8, -5.8, 0]} receiveShadow castShadow>
            <Box
              args={[3.4, 3.4, 0.3]}
              castShadow
              receiveShadow
              rotation={[Math.PI / 2, 0, 0]}
            >
              <MeshTransmissionMaterial
                resolution={1024}
                thickness={6}
                anisotropy={0.1}
                chromaticAberration={0.3}
                distortionScale={0}
                temporalDistortion={0}
                side={THREE.DoubleSide}
              />
              {/* <mesh castShadow receiveShadow position={[0, 0, -1.2]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshPhysicalMaterial
                  color={'white'}
                  toneMapped={false}
                  metalness={0.7}
                  roughness={0.5}
                />
              </mesh> */}
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
                  metalness={0.8}
                  roughness={0.2}
                  mirror={0}
                />
              </mesh>
            </Box>
          </group>
          <group>
            <RoundedBox
              castShadow
              receiveShadow
              args={[2.7, 12, 2]} // Width, height, depth. Default is [1, 1, 1]
              radius={0.25} // Radius of the rounded corners. Default is 0.05
              smoothness={10} // The number of curve segments. Default is 4
              position={[3, -3, -5]}
              // bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
              // creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            >
              <meshPhongMaterial color='#f3f3f3' />
            </RoundedBox>
            <RoundedBox
              castShadow
              receiveShadow
              args={[1.7, 12, 2]} // Width, height, depth. Default is [1, 1, 1]
              radius={0.15} // Radius of the rounded corners. Default is 0.05
              smoothness={4} // The number of curve segments. Default is 4
              position={[3.3, -3, -4.5]}
              // bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
              // creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            >
              <meshPhongMaterial color='#f3f3f3' />
            </RoundedBox>
          </group>
          <mesh>
            <HalfSphere position={[10, 10, -5]} />
          </mesh>
        </group>
        {/* </Stage> */}
      </Canvas>
    </section>
  )
}

export default MyAnimatedBox

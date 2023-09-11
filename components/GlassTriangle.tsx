import React from 'react'
import * as THREE from 'three'

function GlassTriangle() {
  return (
    <mesh position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={
            new Float32Array([
              0,
              1,
              0, // Vertex 1
              -1,
              -1,
              0, // Vertex 2
              1,
              -1,
              0, // Vertex 3
            ])
          }
          count={3}
          itemSize={3}
        />
      </bufferGeometry>
      <meshPhysicalMaterial
        color='lightblue' // Change to a lighter color
        transparent={true}
        opacity={0.7} // Increase opacity (0.0 to 1.0)
        side={THREE.DoubleSide} // Render the triangle from both sides
        depthWrite={false} // Disable depth writing to avoid z-fighting
        depthTest={true} // Enable depth testing
      />
    </mesh>
  )
}

export default GlassTriangle

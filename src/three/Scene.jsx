import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { scrollState } from '../store/scroll'

// Two drifting particle clouds: warm = parent generation, cool = child generation.
function GenerationField({ count = 1100 }) {
  const ref = useRef()

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const cParent = new THREE.Color('#ff6a86')
    const cChild = new THREE.Color('#5b8cff')
    for (let i = 0; i < count; i++) {
      const isParent = i % 2 === 0
      // each cloud sits on its own side and overlaps in the middle
      const side = isParent ? -1 : 1
      const r = Math.pow(Math.random(), 0.6) * 9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = side * (2.6 + Math.random() * 1.5) + r * Math.sin(phi) * Math.cos(theta) * 0.45
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5
      positions[i * 3 + 2] = (r * Math.cos(phi) - 4) * 0.9
      const c = isParent ? cParent : cChild
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const p = scrollState.progress
    // gently rotate and let the two clouds breathe together as you scroll
    ref.current.rotation.y = t * 0.04 + scrollState.mouseX * 0.25
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.06 + scrollState.mouseY * 0.12
    // as progress grows, pull clouds slightly together (reconciliation motif)
    const squeeze = 1 - p * 0.28
    ref.current.scale.setScalar(THREE.MathUtils.damp(ref.current.scale.x, squeeze, 3, delta))
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

// The two "contradiction" orbs from the poster, reimagined in 3D.
function Orb({ position, color, speed, distort }) {
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh position={position}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.1}
          distort={distort}
          speed={1.4}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  )
}

function Rig() {
  useFrame((state, delta) => {
    const p = scrollState.progress
    const cam = state.camera
    // travel through the scene as the user scrolls
    const targetZ = 12 - p * 3.5
    const targetY = -p * 1.5
    cam.position.z = THREE.MathUtils.damp(cam.position.z, targetZ, 2.5, delta)
    cam.position.y = THREE.MathUtils.damp(cam.position.y, targetY, 2.5, delta)
    cam.position.x = THREE.MathUtils.damp(cam.position.x, scrollState.mouseX * 1.2, 2, delta)
    cam.lookAt(0, targetY * 0.4, -3)
  })
  return null
}

export default function Scene() {
  return (
    <Canvas
      className="scene-canvas"
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 12], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#141a30']} />
      <fog attach="fog" args={['#141a30', 12, 30]} />

      <ambientLight intensity={0.8} />
      <pointLight position={[-6, 3, 4]} intensity={2.6} color="#ff8a72" />
      <pointLight position={[6, -2, 4]} intensity={2.6} color="#6c9bff" />

      <Stars radius={60} depth={40} count={1800} factor={3} saturation={0} fade speed={0.6} />

      <GenerationField />
      <Orb position={[-3.1, 0.4, -2]} color="#ff5b7f" speed={1.1} distort={0.38} />
      <Orb position={[3.1, -0.4, -2.4]} color="#5b8cff" speed={1.4} distort={0.34} />

      <Rig />
    </Canvas>
  )
}

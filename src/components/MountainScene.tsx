import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface MountainSceneProps {
  onAnimationComplete: () => void
}

export default function MountainScene({ onAnimationComplete }: MountainSceneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const cameraRef = useRef<THREE.Camera>(null)
  const { camera } = useThree()
  
  // Animation state
  const animationRef = useRef({
    progress: 0,
    isComplete: false
  })

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 5, 15)
    camera.lookAt(0, 0, 0)
  }, [camera])

  useFrame((state, delta) => {
    if (animationRef.current.isComplete) return

    // Update animation progress
    animationRef.current.progress += delta * 0.5

    if (animationRef.current.progress >= 1) {
      animationRef.current.progress = 1
      animationRef.current.isComplete = true
      onAnimationComplete()
      return
    }

    // Smooth easing function
    const easeProgress = 1 - Math.pow(1 - animationRef.current.progress, 3)

    // Camera zoom animation
    const targetZ = 2
    const startZ = 15
    camera.position.z = startZ + (targetZ - startZ) * easeProgress

    // Camera height animation
    const targetY = 1
    const startY = 5
    camera.position.y = startY + (targetY - startY) * easeProgress

    // Look at center
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Mountains */}
      <group ref={groupRef}>
        {/* Left Mountain */}
        <mesh position={[-8, 0, -5]} castShadow receiveShadow>
          <coneGeometry args={[3, 8, 8]} />
          <meshStandardMaterial color="#4B5563" />
        </mesh>

        {/* Right Mountain */}
        <mesh position={[8, 0, -5]} castShadow receiveShadow>
          <coneGeometry args={[3, 8, 8]} />
          <meshStandardMaterial color="#6B7280" />
        </mesh>

        {/* Center Valley */}
        <mesh position={[0, -0.5, -5]} receiveShadow>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#1F2937" />
        </mesh>

        {/* Additional smaller mountains for depth */}
        <mesh position={[-12, 0, -8]} castShadow receiveShadow>
          <coneGeometry args={[2, 6, 6]} />
          <meshStandardMaterial color="#374151" />
        </mesh>

        <mesh position={[12, 0, -8]} castShadow receiveShadow>
          <coneGeometry args={[2, 6, 6]} />
          <meshStandardMaterial color="#4B5563" />
        </mesh>

        {/* Sky gradient effect */}
        <mesh position={[0, 0, -20]}>
          <planeGeometry args={[50, 30]} />
          <meshBasicMaterial color="#1E40AF" />
        </mesh>
      </group>

      {/* Controls (disabled during animation) */}
      <OrbitControls
        enabled={false}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  )
} 
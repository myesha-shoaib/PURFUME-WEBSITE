import { Canvas } from "@react-three/fiber";
import { Float, ContactShadows, Environment } from "@react-three/drei";

function Bottle() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.18}
      floatIntensity={0.5}
    >
      <group rotation={[0.04, -0.2, 0]}>
        {/* Perfume bottle body */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[1.65, 2.15, 0.7]} />
          <meshPhysicalMaterial
            color="#651b32"
            roughness={0.16}
            metalness={0.35}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>

        {/* Glass front highlight */}
        <mesh position={[0, -0.15, 0.355]}>
          <boxGeometry args={[1.42, 1.92, 0.025]} />
          <meshPhysicalMaterial
            color="#a44a5d"
            roughness={0.12}
            metalness={0.18}
            transparent
            opacity={0.48}
            clearcoat={1}
          />
        </mesh>

        {/* Gold neck */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.22, 32]} />
          <meshStandardMaterial
            color="#d6b77b"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Gold cap */}
        <mesh position={[0, 1.42, 0]}>
          <cylinderGeometry args={[0.34, 0.34, 0.56, 32]} />
          <meshStandardMaterial
            color="#d6b77b"
            metalness={0.9}
            roughness={0.16}
          />
        </mesh>

        {/* Label */}
        <mesh position={[0, -0.2, 0.38]}>
          <planeGeometry args={[1.15, 0.65]} />
          <meshStandardMaterial
            color="#f0dfc0"
            roughness={0.65}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Perfume3D() {
  return (
    <div className="perfume-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2.5}
        />

        <pointLight
          position={[-3, 1, 2]}
          color="#d6b77b"
          intensity={35}
        />

        <Bottle />

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.4}
          scale={5}
          blur={2.5}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
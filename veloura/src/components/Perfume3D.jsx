import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  RoundedBox,
  Sparkles
} from "@react-three/drei";

const bottleTones = {
  wine: {
    body: "#5d1c31",
    glass: "#a44a5d",
    label: "#f0dfc0",
    light: "#8f3455"
  },
  amber: {
    body: "#8c4d24",
    glass: "#d58a48",
    label: "#f4e2bc",
    light: "#bd7535"
  },
  rose: {
    body: "#7f3347",
    glass: "#d88991",
    label: "#f7e5d8",
    light: "#bd596e"
  }
};

function Bottle({ tone }) {
  const colors = bottleTones[tone] || bottleTones.wine;

  return (
    <Float speed={1.4} rotationIntensity={0.16} floatIntensity={0.42}>
      <group rotation={[0.04, -0.22, 0]}>
        <RoundedBox
          args={[1.72, 2.25, 0.78]}
          radius={0.16}
          smoothness={6}
          position={[0, -0.16, 0]}
        >
          <meshPhysicalMaterial
            color={colors.body}
            roughness={0.14}
            metalness={0.28}
            clearcoat={1}
            clearcoatRoughness={0.06}
          />
        </RoundedBox>

        <mesh position={[0, -0.15, 0.405]}>
          <planeGeometry args={[1.47, 1.98]} />
          <meshPhysicalMaterial
            color={colors.glass}
            roughness={0.12}
            metalness={0.18}
            transparent
            opacity={0.48}
            clearcoat={1}
          />
        </mesh>

        <mesh position={[0, -0.15, 0.42]}>
          <planeGeometry args={[1.28, 0.74]} />
          <meshPhysicalMaterial
            color={colors.label}
            roughness={0.48}
            metalness={0.05}
          />
        </mesh>

        <mesh position={[0, 0.38, 0.44]}>
          <boxGeometry args={[0.84, 0.025, 0.012]} />
          <meshStandardMaterial
            color="#a2743d"
            metalness={0.78}
            roughness={0.26}
          />
        </mesh>

        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.26, 0.26, 0.2, 32]} />
          <meshStandardMaterial
            color="#d6b77b"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, 1.42, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.58, 32]} />
          <meshStandardMaterial
            color="#d6b77b"
            metalness={0.9}
            roughness={0.16}
          />
        </mesh>

        <mesh position={[0, 1.42, 0.04]}>
          <cylinderGeometry args={[0.355, 0.355, 0.09, 32]} />
          <meshStandardMaterial
            color="#f1d9a6"
            metalness={0.82}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Perfume3D({ tone = "wine" }) {
  return (
    <div className="perfume-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.3} />

        <directionalLight position={[4, 5, 5]} intensity={2.8} />

        <pointLight
          position={[-3, 1, 2]}
          color="#d6b77b"
          intensity={28}
        />

        <pointLight
          position={[3, -1, 2]}
          color={(bottleTones[tone] || bottleTones.wine).light}
          intensity={14}
        />

        <PresentationControls
          global
          snap
          polar={[-0.18, 0.18]}
          azimuth={[-0.38, 0.38]}
          config={{ mass: 1.4, tension: 180 }}
          speed={1.2}
        >
          <Bottle tone={tone} />
        </PresentationControls>

        <Sparkles
          count={22}
          scale={[3.8, 3.8, 2.5]}
          size={2.4}
          speed={0.25}
          color="#e7c98e"
        />

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

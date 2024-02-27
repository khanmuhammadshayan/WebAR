import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { useRouter } from "next/navigation";
const ARView = () => {
  const router = useRouter();
  function MeshComponent() {
    // const fileUrl = "/assets/skull/scene.gltf";
    const fileUrl = "/assets/model.glb";
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
      <group>
        <primitive
          scale={0.75}
          position={[0, -1, -2.2]}
          rotation={[-0.01, -0.2, -0.1]}
          object={gltf.scene}
        />
      </group>
    );
  }
  return (
    <div>
      <button
        onClick={() => {
          router.push("/", { scroll: false });
        }}
      >
        Back
      </button>
      <h1>AR View</h1>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Canvas
          style={{ height: "50vh", width: "50vw", backgroundColor: "grey" }}
        >
          <MeshComponent />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default ARView;

import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
glsl
const SceneTest = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="h-[500px] w-[300px]">
        <Canvas>
          <pointLight position={[2, 3, 3]} intensity={5} />
          <mesh>
            <planeGeometry args={[3, 5]} />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default SceneTest;

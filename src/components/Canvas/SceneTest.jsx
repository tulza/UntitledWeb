import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  { uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0) },
  // Vertex Shader
  /*glsl */ `
    precision mediump float;
    varying vec2 vUv;
    uniform float uTime; 

    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 1.5;
      float noiseAmp = 0.25;
      pos.z += sin(uTime*noiseFreq + vUv.y) * noiseAmp;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  // Fragment
  /*glsl */ `
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;

    varying vec2 vUv;

    void main() {

      gl_FragColor = vec4(sin(vUv.y+uTime)*uColor, 1.0);
    }
    `,
);

extend({ WaveShaderMaterial });

const SceneTest = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="h-[500px] w-[300px]">
        <Canvas camera={{ fov: 10 }}>
          <Suspense fallback={null}>
            <Wave />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

const Wave = () => {
  const ref = useRef(null);
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  return (
    <mesh>
      <planeGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial uColor="aqua" ref={ref} />
    </mesh>
  );
};
export default SceneTest;

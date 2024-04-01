import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  { uTime: 0, uColor: new THREE.Color(1.0, 0.0, 0.0) },
  // Vertex Shader
  /*glsl */ `
    precision mediump float;
    varying vec2 vUv;
    uniform float uTime; 

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  // Fragment
  /*glsl */ `
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;

    varying vec2 vUv;

    vec3 pallet (float t){
vec3 a = vec3(0.558, 0.718, 0.998);
vec3 b = vec3(0.358, 0.198, 0.588);
vec3 c = vec3(2.180, 3.138, 2.000);
vec3 d = vec3(-1.142, -1.582, -0.752);

return a + b *cos(6.28318 * (c*t+d));
}

void main(){
 // Normalized pixel coordinates (from 0 to 1)
 vec2 uv = vUv;
 uv.x = uv.x*7.0;
 uv = uv*2.0;
 uv.x-= 7.0;
 uv.y-= 1.0;
    vec2 uv0 = uv;  
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 3.0; i++) {
        uv = fract(uv*1.7)-0.5;

        float d = length(uv) * exp(-length(uv0));
        vec3 col = pallet(length(uv0)+ i*0.4+uTime*0.5)/2.0;

        d = sin(d*8. + uTime)/8.;
        d = abs(d);
        
        d = pow(0.02/d,1.2);

        finalColor += col * d;
    }

    // Output to screen
    gl_FragColor = vec4(finalColor,1);   
}
    `,
);

extend({ WaveShaderMaterial });

const SceneTest = () => {
  return (
    <div className="-z-10 h-full w-full">
      <Canvas camera={{ fov: 10 }}>
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Wave = () => {
  const ref = useRef(null);
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  return (
    <mesh>
      <planeGeometry args={[7, 1, 32, 32]} />
      <waveShaderMaterial uColor="aqua" ref={ref} />
    </mesh>
  );
};

export default SceneTest;

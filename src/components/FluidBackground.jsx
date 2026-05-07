import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;

    float t = uTime * 0.2;
    
    for(float i = 1.0; i < 4.0; i++) {
      p.x += 0.3 / i * sin(i * 3.0 * p.y + t + i * 0.5);
      p.y += 0.3 / i * cos(i * 3.0 * p.x + t + i * 0.5);
    }

    vec3 color = mix(uColor1, uColor2, 0.5 + 0.5 * sin(p.x + p.y));
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const BackgroundPlane = ({ color1, color2 }) => {
  const meshRef = useRef();
  const { size } = useThree();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uColor1: { value: new THREE.Color(color1) },
    uColor2: { value: new THREE.Color(color2) }
  }), [color1, color2, size]);

  useFrame((state) => {
    meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const FluidBackground = ({ theme }) => {
  const color1 = theme === 'dark' ? '#0a0a1a' : '#f0f0ff';
  const color2 = theme === 'dark' ? '#1b1b3a' : '#e0e0ff';

  return (
    <div className="fixed inset-0 -z-20 opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <BackgroundPlane color1={color1} color2={color2} />
      </Canvas>
    </div>
  );
};

export default FluidBackground;

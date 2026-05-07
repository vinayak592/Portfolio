import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TrackballControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '../data/data';

function Word({ children, slug, ...props }) {
  const ref = useRef();
  
  // URL for the skill icon
  const iconUrl = `https://skillicons.dev/icons?i=${slug || 'react'}`;

  return (
    <Html
      {...props}
      distanceFactor={15}
      position={props.position}
      transform
      occlude
      className="select-none pointer-events-none"
    >
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl whitespace-nowrap shadow-xl hover:bg-accent-cyan/20 hover:border-accent-cyan/50 transition-all duration-300 group">
        <img 
          src={iconUrl} 
          alt={children} 
          className="w-8 h-8 object-contain rounded-md group-hover:scale-110 transition-transform" 
        />
        <span className="text-white font-bold text-lg">{children}</span>
      </div>
    </Html>
  );
}

function Cloud({ radius = 25 }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const count = skills.length;
    
    for (let i = 0; i < count; i++) {
      // Golden ratio for perfect distribution
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      spherical.set(radius, phi, theta);
      temp.push([new THREE.Vector3().setFromSpherical(spherical), skills[i].name, skills[i].slug]);
    }
    return temp;
  }, [radius]);

  return words.map(([pos, word, slug], index) => (
    <Word key={index} position={pos} children={word} slug={slug} />
  ));
}

const SkillCloud = () => {
  return (
    <div className="w-full h-[500px] md:h-[700px] cursor-grab active:cursor-grabbing relative bg-dark/20 rounded-3xl border border-white/5 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <React.Suspense fallback={<Html center><div className="text-accent-cyan animate-pulse font-bold">Initializing 3D Space...</div></Html>}>
          <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <Cloud radius={22} />
          </Float>
        </React.Suspense>
        <TrackballControls noZoom rotateSpeed={2} />
      </Canvas>
      
      {/* Decorative Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-dark via-transparent to-dark opacity-40" />
    </div>
  );
};

export default SkillCloud;

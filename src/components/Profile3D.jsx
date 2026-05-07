import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const Profile3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#58E6D9"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Float>
      </Canvas>
      
      {/* Overlaying Image with Parallax */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 blur-3xl animate-pulse" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full h-full relative z-10"
          >
            <img 
              src="/assets/vinayak.png" 
              alt="Vinayak"
              className="w-full h-full object-cover rounded-full border-4 border-accent-cyan/30 shadow-[0_0_50px_rgba(88,230,217,0.3)]"
            />
          </motion.div>
          {/* Rotating Badge */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-20">
            <svg viewBox="0 0 100 100" className="w-full h-full circular-text">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9px] font-bold fill-accent-cyan uppercase tracking-widest">
                <textPath xlinkHref="#circlePath">
                  Web Developer • UI/UX Designer • Hire Me •
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile3D;

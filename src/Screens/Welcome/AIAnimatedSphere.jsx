import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

function ParticleSphere({ mouse }) {
  const ref = useRef();
  const [autoRotation, setAutoRotation] = useState({ x: 0, y: 0 });

  // Create particles in a spherical distribution
  const [positions] = useState(() => {
    const pos = [];
    const radius = 3.0;
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      pos.push(x, y, z);
    }
    return new Float32Array(pos);
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // Auto rotate
      setAutoRotation((prev) => ({
        x: prev.x + delta * 0.1,
        y: prev.y + delta * 0.15,
      }));

      // Combined rotation (mouse + auto)
      const rotateY = autoRotation.y + mouse.current.x * 1.5;
      const rotateX = autoRotation.x + mouse.current.y * 1.5;
      ref.current.rotation.set(rotateX, rotateY, 0);
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          color="#00bfff"
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function AIAnimatedSphere() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#00115F",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 🔥 Glowing Orange Light */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          width: "100px",
          height: "100px",
          transform: "translateY(-50%)",
          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(0, 56, 198, 1), rgba(0, 56, 198, 1), rgba(0, 56, 198, 1), transparent 70%)",
          filter: "blur(80px)",
          boxShadow: "0 0 100px 50px rgba(0, 56, 198, 1)",
          pointerEvents: "none",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* 💡 Bright Orange Bulb - Right Side */}
      {/* <div
        style={{
          position: "absolute",
          top: "50%",
          right: "40%",
          width: "20px",
          height: "20px",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 148, 156, 1), rgba(255, 148, 156, 1), transparent 70%)",
          boxShadow: "0 0 80px 80px rgba(255, 148, 156, 0.6)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      /> */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "25%",
          width: "450px",
          height: "450px",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 200, 0, 0.9), rgba(255, 150, 0, 0.6), rgba(255, 100, 0, 0.3), transparent 70%)",
          filter: "blur(80px)",
          boxShadow: "0 0 100px 50px rgba(255, 160, 0, 0.5)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* 🌐 Particle + Text Wrapper (Shifted Left) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "40%",
          transform: "translate(-60%, -50%)", // moved from -50% to -60% to shift left ~10%
          width: "750px",
          height: "750px",
        }}
      >
        {/* AI Text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "320px",
            fontWeight: "bold",
            color: "#2D568E",
            zIndex: 10,
            pointerEvents: "none",
            fontFamily: "Arial Black",
            opacity: 0.4,
          }}
        >
          AI
        </div>

        {/* Canvas */}
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          <ambientLight />
          <ParticleSphere mouse={mouse} />
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
}

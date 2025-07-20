import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import "./AIAnimatedSphere.css";

function ParticleSphere({ mouse }) {
  const ref = useRef();
  const [autoRotation, setAutoRotation] = useState({ x: 0, y: 0 });

  const [positions] = useState(() => {
    const pos = [];
    const radius = 2.5;
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
      setAutoRotation((prev) => ({
        x: prev.x + delta * 0.1,
        y: prev.y + delta * 0.15,
      }));
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
    const wrapper = document.querySelector(".particle-wrapper");
    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5);
    };
    wrapper.addEventListener("mousemove", handleMouseMove);
    return () => wrapper.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="ai-container">
      <div className="blue-glow" />
      <div className="orange-glow" />
      <div className="particle-wrapper">
        <div className="ai-label">AI</div>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight />
          <ParticleSphere mouse={mouse} />
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
}

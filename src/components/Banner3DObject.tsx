import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function Banner3DObject() {
  let Obj = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (Obj.current) {
      // Obj.current.rotation.x += 0.001;
      Obj.current.rotation.z += 0.00001 * state.clock.getElapsedTime();
      Obj.current.scale.z += Math.sin(state.clock.getElapsedTime()) * 0.005;
    }
  });

  return (
    <points ref={Obj} position={[0, 0, -5]}>
      {/* <torusGeometry args={[6, 12, 64, 64]} /> */}
      {/* <boxGeometry args={[10, 10, 10, 16, 16, 16]} /> */}
      {/* <capsuleGeometry args={[5, 5, 8, 16]} /> */}
      <torusGeometry args={[6, 12, 64, 64]} />{" "}
      <pointsMaterial size={0.01} sizeAttenuation color={0xffffff} />
    </points>
  );
}

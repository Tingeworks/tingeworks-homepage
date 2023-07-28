import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Banner3DObject() {
  let Obj = useRef<THREE.Points>(null);

  useFrame(() => {
    if (Obj.current) {
      Obj.current.rotation.x += 0.001;
      Obj.current.rotation.y += 0.001;
      Obj.current.rotation.z += 0.001;
    }
  });

  return (
    <points ref={Obj} position={[0, 0, -10]}>
      <torusGeometry args={[10, 64, 64]} />
      <pointsMaterial size={0.02} sizeAttenuation />
    </points>
  );
}

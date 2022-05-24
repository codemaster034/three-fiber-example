import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Box = (props) => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;

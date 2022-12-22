import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { Physics, usePlane } from "@react-three/cannon"

export const Floor = () => {
  const [ref] = usePlane(() => ({
    mass: 10,
    // args: [100, 1, 100],
    position: [0, -5, 0.01],
    rotation: [80, 0, 0],
    type: "Static"
  }))
  return (
    <>
      {/* @ts-ignore */}
      <mesh ref={ref} scale={200}>
        <planeGeometry />
        <meshStandardMaterial color='rgb(36,46,60)' />
      </mesh >
    </>
  )
}

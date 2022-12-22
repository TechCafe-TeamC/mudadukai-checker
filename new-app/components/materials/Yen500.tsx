import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { Physics, useBox, usePlane } from "@react-three/cannon"

export const Yen500 = () => {
  const [ref] = useBox(() => ({
    mass: 1,
    args: [2.3, 2.3, 0.1],
    position: [0, 20, 0],
    rotation: [0, 0, 0],

  }))
  const fbx = useLoader(FBXLoader, "./money24.fbx")
  const map = useLoader(TextureLoader, "./5_10_Roughness.png")

  return <primitive object={fbx} map={map} ref={ref} scale={0.1} />
}

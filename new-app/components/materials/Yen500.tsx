import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { Physics, useSphere } from "@react-three/cannon"

export const Yen500 = () => {
  const [ref] = useSphere(() => ({
    mass: 100,
    // args:[5,5,5],
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0]
  }))
  const fbx = useLoader(FBXLoader, "./money24.fbx")
  const map = useLoader(TextureLoader, "./5_10_Roughness.png")

  return <primitive object={fbx} map={map} ref={ref} args={[0.1, 0.1, 0.1]} />
}

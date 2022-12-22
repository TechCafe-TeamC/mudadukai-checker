/* eslint-disable react/display-name */
import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useBox, usePlane } from "@react-three/cannon"
import { memo } from "react"

type Props = {
  posX: number
}

export const Yen500 = memo(({ posX }: Props) => {

  const [ref] = useBox(() => ({
    mass: 0.5,
    args: [2.3, 2.3, 0.1],
    position: [posX, 20, 0],
    rotation: [0, 0, 0],

  }))
  const fbx = useLoader(FBXLoader, "./money24.fbx")
  let fbxClone = fbx.clone()
  const map = useLoader(TextureLoader, "./5_10_Roughness.png")

  return (
    <primitive object={fbxClone} map={map} ref={ref} scale={0.1}/>
  )
})

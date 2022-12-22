/* eslint-disable react/display-name */
import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { useBox } from "@react-three/cannon"
import { memo } from "react"

type Props = {
  posX: number
  fileid: number
}

const fbxs = ["./yen500.fbx", "./yen100.fbx", "./yen50.fbx", "./yen10.fbx", "./yen5.fbx", "./yen1.fbx"]
export const Yen500 = memo(({ posX, fileid }: Props) => {
  console.log(fileid);

  const [ref] = useBox(() => ({
    mass: 0.5,
    args: [2.3, 2.3, 0.1],
    position: [posX, 25, 0],
    rotation: [0, 0, 0],
  }))
  const fbx = useLoader(FBXLoader, fbxs[fileid])
  let fbxClone = fbx.clone()

  return (
    <primitive object={fbxClone} ref={ref} scale={0.1}/>
  )
})

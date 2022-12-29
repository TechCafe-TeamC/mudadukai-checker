/* eslint-disable react/display-name */
import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { useBox } from "@react-three/cannon"
import { memo } from "react"

type Props = {
  pos: number[]
  fileid: number
}

export const Yen500 = memo(({ pos, fileid }: Props) => {
  const fbxs = ["./yen500.fbx", "./yen100.fbx", "./yen50.fbx", "./yen10.fbx", "./yen5.fbx", "./yen1.fbx"]
  // console.log(fileid);

  const [ref] = useBox(() => ({
    mass: 0.5,
    // args: [2.3, 2.3, 0.1],
    args: [3.5, 3.5, 0.15],
    position: [pos[0], pos[1], pos[2]],
    rotation: [0, 0, 0],
  }))
  const fbx = useLoader( FBXLoader , fbxs[fileid])
  let fbxClone = fbx.clone()

  return (
    <primitive object={fbxClone} ref={ref} scale={0.2} />
  )
})

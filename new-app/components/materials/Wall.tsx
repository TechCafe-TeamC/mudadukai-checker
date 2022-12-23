import { useFrame } from "@react-three/fiber"
import { usePlane } from "@react-three/cannon"

export const Wall = () => {
  const [ref, api] = usePlane(() => ({
    mass: 10,
    // args: [100, 1, 100],
    position: [0, -5, 0.01],
    rotation: [80, 0, 0],
    type: "Static"
  }))

  useFrame(({ mouse }) => {

    api.rotation.set(80 - 10, mouse.x * 0.2, 0)
  })
  return (
    <>
      {/* @ts-ignore */}
      <mesh ref={ref} scale={200} receiveShadow castShadow>
        <planeGeometry />
        <meshStandardMaterial color='#5b5b74' />
      </mesh >
    </>
  )
}

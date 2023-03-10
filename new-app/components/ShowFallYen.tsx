/* eslint-disable react/display-name */
import { Canvas } from "@react-three/fiber"
import { Yen500 } from "./materials/Yen500"
import { Physics } from "@react-three/cannon"
import { Floor } from "./materials/Floor"
import { memo } from "react"
import { Wall } from "./materials/Wall"

type Props = {
    coin: number[]
}

export const ShowFallYen = memo(({ coin }: Props) => {
    return (
        <Canvas className='w-full h-full absolute top-0 left-0'
            camera={{
                position: [0, 6, 17],
                rotation: [ -0.3, 0, 0]
            }}
        >
            {/* <ambientLight intensity={0.07} /> */}
            <fog attach="fog" color={"#101622"} near={1} far={40} />
            <pointLight position={[30, 40, 10]} castShadow />
            <directionalLight position={[30, 30, 10]} intensity={0.6} castShadow />
            <Physics>
                <Floor />
                <Wall />
                {
                    coin ?
                        coin.map((e, i) =>
                            [...Array(e)].map((c, j) =>
                                <Yen500 pos={[Math.random() * 10 - 5, Math.random() * 100 + 25, Math.random() * 10 - 5]} key={j + e * i} fileid={i} />
                            ))
                        : <></>
                }
            </Physics>
            <ambientLight intensity={0.1} color='yellow' />
            <directionalLight position={[15, 20, 10]} intensity={0.8} castShadow />

        </Canvas >)
})

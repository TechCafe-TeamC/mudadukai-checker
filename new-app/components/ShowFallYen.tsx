/* eslint-disable react/display-name */
import { Canvas } from "@react-three/fiber"
import { Yen500 } from "./materials/Yen500"
import { Physics } from "@react-three/cannon"
import { Floor } from "./materials/Floor"
import useTotalToCoin from "../hooks/useTotalToCoin"
import { memo } from "react"

type Props = {
    coin: number[]
}

export const ShowFallYen = memo(({ coin }: Props) => {
    return (
        <Canvas className='w-full h-full absolute top-0 left-0'
            camera={{
                position: [0, 0, 20]
            }}
        >
            <Physics>
                <Floor />
                {
                    coin ?
                        coin.map((e, i) =>
                            [...Array(e)].map((c, j) =>
                                <Yen500 posX={Math.random() * 30 - 15} key={j + e * i} />
                            ))
                        : <></>
                }
            </Physics>
            <ambientLight args={[0xffffff]} intensity={0.1} />
            <directionalLight position={[1, 20, -10]} intensity={1} castShadow />

        </Canvas >)
})

/* eslint-disable react/display-name */
import { Canvas } from "@react-three/fiber"
import { Yen500 } from "./materials/Yen500"
import { Physics } from "@react-three/cannon"
import { Floor } from "./materials/Floor"
import useTotalToCoin from "../hooks/useTotalToCoin"
import { memo } from "react"
import { radToDeg } from "three/src/math/MathUtils"

type Props = {
    coin: number[]
}

export const ShowFallYen = memo(({ coin }: Props) => {
    return (
        <Canvas className='w-full h-full absolute top-0 left-0'
            camera={{
                position: [0, 6, 20],
                rotation: [ 0, 0, 0]
            }}
        >
            <Physics>
                <Floor />
                {
                    coin ?
                        coin.map((e, i) =>
                            [...Array(e)].map((c, j) =>
                                <Yen500 posX={Math.random() * 30 - 15} key={j + e * i} fileid={j} />
                            ))
                        : <></>
                }
            </Physics>
            <ambientLight intensity={0.07} color='yellow' />
            <directionalLight position={[30, 30, 10]} intensity={0.6} castShadow />

        </Canvas >)
})

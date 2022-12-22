import { Canvas } from "@react-three/fiber"
import { Yen500 } from "./materials/Yen500"
import { Physics } from "@react-three/cannon"
import { Floor } from "./materials/Floor"

export const ShowFallYen = () => {
    return (
        <Canvas className='w-full h-full absolute top-0 left-0'
            camera={{
                position: [0, 0, 20]
            }}
        >
            <Physics>
                <Floor />
                <Yen500 />
            </Physics>
            <ambientLight args={[0xffffff]} intensity={0.1} />
            <directionalLight position={[1, 30, 1]} intensity={1} />

        </Canvas>)
}

import { Canvas } from "@react-three/fiber"
import { Material } from '../components/materials/Material'
import { Yen500 } from "./materials/Yen500"
import { Physics } from "@react-three/cannon"

export const ShowFallYen = () => {
    return (
        <Canvas className='w-full h-full absolute top-0 left-0'
            camera={{
                position: [0, 0, 200]
            }}
        >
            <Physics>
                <Yen500 />
            </Physics>
            <ambientLight args={[0xffffff]} intensity={0.1} />
            <directionalLight position={[1, 1, 1]} intensity={0.4} />

        </Canvas>)
}

import React from 'react'

export const Material = () => {
    return (
        <mesh>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color="aqua"/>
        </mesh>
    )
}

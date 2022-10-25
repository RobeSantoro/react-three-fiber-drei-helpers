
import {Html, TransformControls} from '@react-three/drei'
import {useRef} from 'react'

export default function Cube({scale = 1}) {
    const cubeRef = useRef()

    return <>
        <mesh ref={cubeRef} position={[2, 0, 0]} rotation-x={0.0} scale={scale}>
            <boxGeometry />
            <meshStandardMaterial color={'blue'} wireframe={false} />
            <Html wrapperClass='label' center>Cube</Html>
        </mesh>
        <TransformControls object={cubeRef} mode='translate' />
    </>
}
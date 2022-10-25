import './Experience.css'

import {MeshReflectorMaterial, Float, Html, Text, OrbitControls, TransformControls, PivotControls} from '@react-three/drei'
import {useRef} from 'react'
import {button, useControls} from 'leva'
import {Perf} from 'r3f-perf'

import Cube from './cube.jsx'

export default function Experience() {

    const sphereRef = useRef()
    const {position, color} = useControls('Sphere', {
        position:
        {
            value: {x: -2, y: 0, z: 0},
            step: 0.01
        },
        interval: {min: 0, max: 10, value: [3, 8]},
        color: 'red',
        clickMe: button(() => {console.log('Clicked')}),
        choice: {options: ['a', 'b', 'c']}
    })

    const {scale} = useControls('Cube', {
        scale:
        {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    const {perfVisible} = useControls('Perf Monitor', {
        perfVisible: false
    })

    return <>

        {perfVisible ? <Perf position='top-left' /> : null}

        <OrbitControls dampingFactor={0.05} makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Cube scale={scale} />

        <PivotControls
            anchor={[0, 0, 0] /* Anchor Relative to bounding Box */}
            depthTest={false}
            lineWidth={4}
            axisColors={['red', 'green', 'blue']}
            fixed={true}
            scale={100}
        >
            <mesh ref={sphereRef} position={[position.x, position.y, position.z]} rotation-x={0.0} scale={2}>
                <sphereGeometry args={[.5, 32, 32]} />
                <meshStandardMaterial color={color} wireframe={false} />
                <Html
                    position={[0, 0, .6]}
                    wrapperClass='label'
                    center
                    distanceFactor={8}
                    occlude={[sphereRef]}
                >
                    Sphere 🏀
                </Html>
            </mesh>
        </PivotControls>

        <mesh position-y={-1} scale={20} rotation={[-Math.PI * .5, 0, 0]}>
            <planeGeometry />
            {/* <meshBasicMaterial color={ 'green' } /> */}
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                color='white'
            />
        </mesh>

        <Float intensity={10} speed={5}>
            <Text
                font='./CaskaydiaCove.woff'
                scale={[3, 3, 3]}
                color='green'
                position={[0, 2, 0]}
                maxWidth={1}
                textAlign='center'
            >React Three  Fiber Drei Helpers
            </Text>
        </Float>

    </>
}
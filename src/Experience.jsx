import { MeshReflectorMaterial, Float, Html, Text, OrbitControls, TransformControls, PivotControls } from '@react-three/drei'
import { useRef } from 'react'
import './Experience.css'

export default function Experience() {

    const cubeRef = useRef()
    const sphereRef = useRef()

    return <>

        <OrbitControls dampingFactor={ 0.05 } makeDefault />

        <directionalLight position={ [1, 2, 3] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh ref={ cubeRef } position={ [2, 0, 0] } rotation-x={ 0.0 } scale={ 1 }>
            <boxGeometry />
            <meshStandardMaterial color={ 'blue' } wireframe={ false } />
            <Html wrapperClass='label' center>Box</Html>
        </mesh>
        <TransformControls object={ cubeRef } mode='translate' />

        <PivotControls
            anchor={ [0, 0, 0] /* Anchor Relative to bounding Box */ }
            depthTest={ false }
            lineWidth={ 4 }
            axisColors={ ['#9381ff', '#ff4d6d', '#7ae582'] }
            fixed={ true }
            scale={ 100 }
        >
            <mesh ref={ sphereRef } position={ [-3, 0, 0] } rotation-x={ 0.0 } scale={ 2 }>
                <sphereGeometry args={ [.5, 32, 32] } />
                <meshStandardMaterial color={ 'red' } wireframe={ false } />
                <Html
                    position={ [0, 0, .6] }
                    wrapperClass='label'
                    center
                    distanceFactor={ 8 }
                    occlude={ [sphereRef, cubeRef] }
                >
                    Sphere 🏀
                </Html>
            </mesh>
        </PivotControls>

        <mesh position-y={ -1 } scale={ 20 } rotation={ [-Math.PI * .5, 0, 0] }>
            <planeGeometry />
            {/* <meshBasicMaterial color={ 'green' } /> */ }
            <MeshReflectorMaterial
                resolution={ 512 }
                blur={ [1000, 1000] }
                mixBlur={ 1 }
                mirror={ 0.5 }
                color='grey'
                 />
        </mesh>

        <Float intensity={ 10 } speed={ 5 }>
            <Text
                font='./CaskaydiaCove.woff'
                scale={ [3, 3, 3] }
                color='green'
                position={ [0, 2, 0] }
                maxWidth={ 1 }
                textAlign='center'
            >React Three  Fiber Drei Helpers
            </Text>
        </Float>

    </>
}
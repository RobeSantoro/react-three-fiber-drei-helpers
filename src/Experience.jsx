import { useRef } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './customObject';

extend({ OrbitControls })

export default function Experience() {

    // const { camera, gl } = useThree()
    // console.log(camera);
    // console.log(gl);

    const CameraControls = () => {
        // Get a reference to the Three.js Camera, and the canvas html element.
        // We need these to setup the OrbitControls component.
        // https://threejs.org/docs/#examples/en/controls/OrbitControls
        const { camera, gl: { domElement } } = useThree();
        // Ref to the controls, so that we can update them on every frame using useFrame
        const controls = useRef();
        useFrame((state) => controls.current.update());
        return <orbitControls ref={ controls } args={ [ camera, domElement ] } />;
    };


    const groupRef = useRef()
    const cubeRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta * 4
        groupRef.current.rotation.y -= delta

        const angle = state.clock.elapsedTime

        state.camera.position.x = Math.sin(angle) * 8
        state.camera.position.z = Math.cos(angle) * 8
        state.camera.lookAt(0, 0, 0)
    })

    return <>

        {/* <OrbitControls args={ [ camera, gl ] } /> */ }
        <CameraControls />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <group ref={ groupRef } >
            <mesh ref={ cubeRef } position={ [ 3, 0, 0 ] } rotation-x={ 0.0 } scale={ 1 }>
                <boxGeometry />
                <meshStandardMaterial color={ 'mediumpurple' } wireframe={ false } />
            </mesh>
            <mesh position={ [ -3, 0, 0 ] } rotation-x={ 0.0 } scale={ 1 }>
                <sphereGeometry args={ [ .5, 32, 32 ] } />
                <meshStandardMaterial color={ 'orange' } wireframe={ false } />
            </mesh>
        </group>

        <mesh position-y={ -1 } scale={ 20 } rotation={ [ -Math.PI * .5, 0, 0 ] }>
            <planeGeometry />
            <meshBasicMaterial color={ 'greenyellow' } />
        </mesh>

        <CustomObject />
    </>
}
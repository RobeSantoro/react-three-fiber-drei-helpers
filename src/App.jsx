import './App.css'
import * as THREE from 'three'

import {Canvas} from '@react-three/fiber'
import {Leva} from 'leva'

import Experience from './Experience.jsx'

export default function App() {

    return (
        <>
            <Leva /> {/* Fixes the error of render */}
            <Canvas
                dpr={[1, 2]} // default
                gl={{
                    antialias: true, // default
                    toneMapping: THREE.ACESFilmicToneMapping, // default
                    outputEncoding: THREE.sRGBEncoding // default
                }}
                camera={{
                    fov: 45,
                    near: 0.01,
                    far: 300,
                    position: [3, 2, 6]
                }}
            >
                <Experience />
            </Canvas>
        </>
    )
}

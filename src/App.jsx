import './App.css'
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';

import * as THREE from 'three'

export default function App() {

    return (
        <Canvas
            dpr={ [1, 2] } // default
            gl={ {
                antialias: true, // default
                toneMapping: THREE.ACESFilmicToneMapping, // default
                outputEncoding: THREE.sRGBEncoding // default
            } }
            camera={ {
                fov: 45,
                near: 0.01,
                far: 300,
                position: [3, 2, 6]
            } }
        >
            <Experience />
        </Canvas>
    )
}

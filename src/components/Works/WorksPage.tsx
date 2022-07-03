import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Suspense } from "react";
import Main from "./Main";
import Background from "./Background";

export default function WorksPage() {



    return (
        <Canvas>
            <color attach='background' args={['#000000']} />       
            <pointLight intensity={4} position={[5, 10, 10]} />
            <Suspense fallback={null}>
                <ScrollControls pages={5}>

                    <Scroll html>
                        <Main />
                    </Scroll>

                    <Background />

                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}
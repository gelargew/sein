import { Scroll, ScrollControls, TorusKnot } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Background from "./Background";
import Featured from "./Featured";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Homepage() {


    return (
        <Canvas>
            <color attach='background' args={['#111111']} />
            <pointLight intensity={4} position={[5, 10, 10]} />
            <Suspense fallback={null}>

                <ScrollControls pages={7}>

                    <Scroll html>
                        <Hero />
                        <Featured />
                        <Footer />
                    </Scroll>

                    <Background />

                </ScrollControls>

            </Suspense>
        </Canvas>
    )
}
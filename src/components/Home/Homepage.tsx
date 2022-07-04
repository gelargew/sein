import { Scroll, ScrollControls, TorusKnot } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Background from "./Background";
import Featured from "./Featured";
import Footer from "./Footer";
import Hero from "./Hero";
import * as THREE from 'three'

export default function Homepage() {


    return (
        <Canvas>
            <color attach='background' args={['#111111']} />
            <pointLight intensity={0.2} position={[3, -2, -10]} />
            <Light/>
            <Suspense fallback={null}>

                <ScrollControls pages={6.7}>

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





const Light = () => {
    const ref = useRef<THREE.PointLight>(null!)
    useFrame(({mouse}, delta) => {
        ref.current.position.x = THREE.MathUtils.damp(
            ref.current.position.x,
            mouse.x*6,
            3,
            delta
            )
        ref.current.position.y = THREE.MathUtils.damp(
            ref.current.position.y,
            mouse.y*4,
            3,
            delta
            )
    })

    return <pointLight ref={ref} decay={2} distance={5} intensity={1} color='lightblue' position={[0, 1, 2]} />
}
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, useProgress } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Main from "./Main";
import Background from "./Background";
import Footer from "../Home/Footer";



export default function WorksPage() {


    return (
        <Canvas>
            <color attach='background' args={['#000000']} />       
            <pointLight intensity={4} position={[5, 10, 10]} />
            <Suspense fallback={null}>
                <ScrollControls pages={5.8}>
        
                    <Scroll html>
                        <Main />
                        <Footer style={{ transform: 'translateY(-150px)'}} />
                    </Scroll>
        
                    <Background />
        
                </ScrollControls>


            </Suspense>
        </Canvas>
    )

}


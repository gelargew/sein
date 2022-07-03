// @ts-nocheck

import { Image, MeshWobbleMaterial, Plane, Scroll, TorusKnot } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"

export default function Background() {
    const {width:w, height:h} = useThree(state => state.viewport)


    return (
        <Scroll>
            <TorusKnot args={[2, 1, 320, 320]} >
                <MeshWobbleMaterial color='#111' metalness={0.5} roughness={0.4} />
            </TorusKnot>
            <TorusKnot args={[2, 1, 320, 320]} position={[0, -8, -20]} scale={3} >
                <MeshWobbleMaterial color='#111' metalness={0.5} roughness={0.4} />
            </TorusKnot>

            <Image url='/images/desk2.webp' position={[-w*0.25, -h*1.6, -2]} scale={[w*0.5, h*2, 1]} />
            <Image url='/images/hand.webp' position={[-w*0.25, -h*3.7, -2]} scale={[w*0.7, h*1, 1]} />
            <Image url='/images/desk2.webp' position={[w*0.25, -h*1.9, -2]} scale={[w*0.5, h*2, 1]} />
            <Image url='/images/panther.jpg' position={[0, -h*5.4, -4]} scale={[w*1.8, h*2.4, 1]} />
        </Scroll>
    )
}
// @ts-nocheck

import { Image, MeshWobbleMaterial, Plane, Scroll, TorusKnot } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"

export default function Background() {
    const {width:w, height:h} = useThree(state => state.viewport)


    return (
        <Scroll>
            <Image url='/images/desk2.webp' position={[-w*0.16, -h*1.6, -2]} scale={[w*0.3, h, 1]} />
            <Image url='/images/hand.webp' position={[-w*0.16, -h*3.7, -2]} scale={[w*0.4, h*0.6, 1]} />
            <Image url='/images/desk2.webp' position={[w*0.16, -h*1.9, -2]} scale={[w*0.3, h, 1]} />
            <Image url='/images/panther.jpg' position={[0, -h*5, -4]} scale={[w*1.8, h*2.4, 1]} />
        </Scroll>
    )
}
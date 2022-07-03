// @ts-nocheck

import { Image, MeshWobbleMaterial, Scroll, TorusKnot } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export default function Background() {
    const {width:w, height:h} = useThree(state => state.viewport)


    return (
        <Scroll>
            <TorusKnot args={[2, 1, 320, 320]} >
                <MeshWobbleMaterial color='#111' metalness={0.5} roughness={0.4} />
            </TorusKnot>
            <Image url='/images/desk2.webp' position={[0, -h*2.8, -4]} grayscale={0.4} scale={[w*2, h*2, 1]}/>
            <Image url='/images/panther.jpg' position={[0, -h*5.7, -4]} scale={[w*1.8, h*2.4, 1]} />
        </Scroll>
    )
}
// @ts-nocheck

import { Html, Image, MeshWobbleMaterial, Plane, Scroll, TorusKnot } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export default function Background() {
    const {width:w, height:h} = useThree(state => state.viewport)


    return (
        <Scroll>
            <TorusKnot args={[2, 0.7, 600, 600]} scale={1.3} >
                <MeshWobbleMaterial color={'#999999'} metalness={0.9} roughness={0.5} />
            </TorusKnot>

            <Image url='/images/desk2.webp' position={[0, -h*2.8, -4]} grayscale={0.4} scale={[w*2, h*2, 1]}/>
            <Image url='/images/panther.jpg' position={[0, -h*6, -4]} scale={[w*1.8, h*2.4, 1]} />
        </Scroll>
    )
}




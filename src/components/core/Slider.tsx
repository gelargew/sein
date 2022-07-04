import { useDrag } from '@use-gesture/react'
import React from 'react'
import { a, config, useSpring } from 'react-spring'


interface SliderProps extends React.HTMLProps<HTMLDivElement> {
    minX?: number,
    maxX?: number
}

export const Slider = ({minX=0, maxX=1000, ...props}: SliderProps) => {
    const [{x}, api] = useSpring(() => ({ x: 0 }))

    const bind = useDrag(({down, movement: [mx]}) => {     
        if (down) {
            const elX = x.get()
            if (elX + mx > minX || elX + mx < -maxX) return
            else api.start({ x: mx + elX})
        }     
    })


    return (
        <a.div  {...bind()} style={{x, touchAction: 'none'}} className={props.className} >
            {props.children}
        </a.div>
    )
}
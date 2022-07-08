import { useEffect, useRef, useState } from "react"
import { useSpring, a } from "react-spring"
import styles from './core.module.css'


interface StackSliderProps extends React.HTMLProps<HTMLDivElement> {
    page?: number
}

export default function StackSlider({page=0,children, ...props}: StackSliderProps) {
    const ref = useRef<HTMLDivElement>(null!)

    

    useEffect(() => {
        const ar = Array.from(ref.current.children) as HTMLElement[]
        ar.forEach(d => {
            if (d.dataset.stackitem) {
                if (parseInt(d.dataset.stackitem) === page) {
                    d.style.transform = 'scaleX(0)'
                    d.className = `${styles.stackitem} ${styles.animate}`
                    d.style.transform = 'scaleX(1)'
                }
                else d.className = styles.stackitem
            }
        })
    },[page])

    return (
        <div ref={ref} style={{ position: 'relative' }} {...props} >
            {children}
        </div>
    )
}


const Item = () => {


    return (
        <></>
    )
}
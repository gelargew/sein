import { useAtom } from 'jotai'
import { pointerState, pointerText } from '../../store'
import styles from './pointer.module.css'
import { a, useSpring } from 'react-spring'
import { useMove } from '@use-gesture/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Pointer() {
    const [text] = useAtom(pointerText)
    const {pathname} = useRouter()
    const [{background, active, focus, color}] = useAtom(pointerState)
    const [{x, y, scale, opacity}, api] = useSpring(() => ({ x: 0, y: 0, scale: 1, opacity: 0 }))


    const handleMove = (e:PointerEvent) => {
        api.start({x: e.clientX, y: e.clientY, scale: e.clientX/x.get(), opacity: active ? 1 : 0})

    }

    useEffect(() => {
        if (pathname === '/') {
            window.addEventListener('pointermove', handleMove)
        }
        else window.removeEventListener('pointermove', handleMove)
        return () => {window.removeEventListener('pointermove', handleMove)}
    }, [text, pathname])

    return (
        <a.div className={styles.pointer} style={{x, y, scale, opacity, background, color}} >
            <p>{text}</p>
        </a.div>

    )
}



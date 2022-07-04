import { useScroll } from '@react-three/drei'
import { useEffect, useLayoutEffect } from 'react'
import { a, config, useSpring } from 'react-spring'
import styles from './styles/main.module.css'

export default function Main() {

    return (
        <div className={styles.main} >
            <section className={styles.header}>
                <div className={styles.header_content}>
                    <h1>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</h1>
                    <p>SCROLL DOWN</p>
                </div>
                
            </section>
            

            <div className={styles.content} >

                <div className={styles.wall_left} />

                <ContentLeft />                   

                <div className={styles.wall_mid} />
                <div className={styles.wall_top} />

                <ContentRight />


                <div className={styles.wall_right} />


            </div>


        </div>
    )
}


const ContentLeft = () => {


    return (
        <div className={styles.content_left}>
            <video src='/videos/dance.mp4' loop muted autoPlay />
            <div className={styles.content_text} >
                <h4>Lorem Ipsum</h4>
                <p>Exporting, encoding, transcoding and rendering all mean the same thing in video editing. It simply means conversion from one format to next for delivery to the client</p>
            </div>
            
            <div className={`${styles.content_text} ${styles.content_text_2}`} >
                <h4>hello Ipsum</h4>
                <p>It is also worth noting that the reason for the so called "space" below or above in some inline video is because of the line-height that is defined on the container</p>
            </div>  

            <video className={styles.video2} src='/videos/dance.mp4' loop muted autoPlay />

            <div className={styles.content_text} >
                <h4>Lorem Ipsum</h4>
                <p>Exporting, encoding, transcoding and rendering all mean the same thing in video editing. It simply means conversion from one format to next for delivery to the client</p>
            </div>

            <div className={`${styles.content_text} ${styles.content_text_2}`} >
                <h4>hello Ipsum</h4>
                <p>It is also worth noting that the reason for the so called "space" below or above in some inline video is because of the line-height that is defined on the container</p>
            </div>  
        </div>
    )
}


const ContentRight = () => {   
    const scrollData = useScroll()
    const [{y}, api] = useSpring(() => ({y: 0, config: {
        tension: 235,
        friction: 120
      }}))

    const onwheel = (e:WheelEvent) => {
        if (scrollData.offset) {
            api.start({y: scrollData.offset * 500})
        }      
    }

    useLayoutEffect(() => {
        window.addEventListener('wheel', onwheel)
        return () => window.removeEventListener('wheel', onwheel)
    }, [])
 
    return (
        <a.div className={styles.content_right} style={{y}} >
            <video src='/videos/dance.mp4' loop muted autoPlay />
            <div className={styles.content_text} >
                <h4>Lorem Ipsum</h4>
                <p>Exporting, encoding, transcoding and rendering all mean the same thing in video editing. It simply means conversion from one format to next for delivery to the client</p>
            </div>
            
            <div className={`${styles.content_text} ${styles.content_text_2}`} >
                <h4>hello Ipsum</h4>
                <p>It is also worth noting that the reason for the so called "space" below or above in some inline video is because of the line-height that is defined on the container</p>
            </div>  

            <video className={styles.video2} src='/videos/dance.mp4' loop muted autoPlay />

            <div className={styles.content_text} >
                <h4>Lorem Ipsum</h4>
                <p>Exporting, encoding, transcoding and rendering all mean the same thing in video editing. It simply means conversion from one format to next for delivery to the client</p>
            </div>

            <div className={styles.content_text} />


        </a.div>
    )
}
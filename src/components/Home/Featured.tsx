import styles from './styles/featured.module.css'
import { useAtom } from 'jotai'
import { setPointer } from '../../store'

export default function Featured() {


    return (
        <section className={styles.featured}>
            <Hero2 />
            <Stories />
        </section>
    )
}


const Hero2 = () => {
    const [, setPointerState] = useAtom(setPointer)

    const onEnter = () => {
        setPointerState({focus: false, active: true, background: 'none', color: '#FFFFFF', text: 'Texture'})
    }
    const onOut = () => {
        setPointerState({active: false, text: 'Sein'})
    }

    
    return (
        <section className={styles.ftd_s1}>
            <div className={styles.ftd_s1_head} >
                <h3>/ EXPERTISE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <a>what we do →</a>
            <section className={styles.ftd_s2} onPointerEnter={onEnter} onPointerLeave={onOut} >
                <video src='/videos/entanglement-by-robbryantjr.mp4' loop muted autoPlay style={{width: '100%'}} />
            </section>
        </section>
    )
}



const Stories = () => {


    return (
        <>
            <section className={styles.ftd_s3} >
                <div className={styles.ftd_s3_content}>
                    <h3 title="featured" >/ FEATURED</h3>
                    <ol className={styles.ftd_stories}>
                        <li>
                            <small>/ 01</small>
                            <h4>Drei</h4>
                            <div>
                                Drei is a growing collection of useful helpers and abstractions for react-three-fiber
                            </div>
                            <a>Go</a>
                            <div className={styles.anchorline} />
                        </li>
                        <li>
                            <small>/ 02</small>
                            <h4>Zustand</h4>
                            <div>
                                Zustand is a small, fast and scalable bearbones state-management solution, it has a comfy api based on hooks
                            </div>
                            <a>Go</a>
                            <div className={styles.anchorline} />
                        </li>
                        <li>
                            <small>/ 03</small>
                            <h4>Drei</h4>
                            <div>
                                Drei is a growing collection of useful helpers and abstractions for react-three-fiber
                            </div>
                            <a>Go</a>
                            <div className={styles.anchorline} />
                        </li>
                    </ol>
                    <a className={styles.ftd_explore} >Explore other stories →</a>   
                </div>

            </section>       
        </>
    )
}
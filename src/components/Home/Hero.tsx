import styles from './styles/hero.module.css'
import { a } from 'react-spring'
import { Slider } from '../core/Slider'
import { useMove } from '@use-gesture/react'
import { useAtom } from 'jotai'
import { pointerState, pointerText, setPointer } from '../../store'



export default function Hero() {

    return (
        <>
            <TheHero />  
            <Expertise />    
            <GlassSection />     
        </>
    )
}



const TheHero = () => {

    return (
        <>
            <section className={styles.heroLayout}>
                <a.section className={styles.heroSection}>
                    <small className={styles.heroSectionNumber}>/ 01</small>
                    <h1 className={styles.heroText}>
                        <div>Developer </div>
                        <div>Collective for </div>
                        <div>Creative space</div>
                    </h1>
                    <small className={styles.heroSectionFooter}>/ SCROLL DOWN</small>
                </a.section>

                <a.section className={styles.heroSection}>
                    <h1>WE MOVE THE INDUSTRY</h1>
                </a.section>


                <nav className={styles.heroNav}>
                    <button>prev</button>
                    ------
                    <button>next</button>
                </nav>

            </section>
        </>
    )
}


const itemData = [
    {
        title: 'Quaternion',
        description: 'Quaternions are used in pure mathematics, but also have practical uses in applied mathematics, particularly for calculations involving three-dimensional rotations',
        imgURL: '/images/desk2.webp'

    },
    {
        title: 'Raycaster',
        description: 'This class is designed to assist with raycasting. Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.',
        imgURL: '/images/hand.webp'
    },
    {
        title: 'Frustum',
        description: "Frustums are used to determine what is inside the camera's field of view",
        imgURL: '/images/cloudman.jpg'
    }
]


const Expertise = () => {
    const [, setPointerState] = useAtom(setPointer)

    const onEnter = () => {
        setPointerState({focus: false, active: true, background: 'none', color: '#FFFFFF', text: 'Drag'})
    }
    const onOut = () => {
        setPointerState({active: false, text: 'Sein'})
    }


    return (
        <section className={styles.expertise} >
            <section className={styles.exp_s1}>
                <div className={styles.exp_s1_head} >
                    <h3>/ EXPERTISE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <a>what we do →</a>
            </section>

            <section className={styles.exp_s2} onPointerEnter={onEnter} onPointerLeave={onOut}>
                <Slider className={styles.slider} >
                    {itemData.map(data => <Item key={data.title} data={data} />)}
                </Slider>
            </section>

        </section>
    )
}



const Item = ({ data }: { data: typeof itemData[0]}) => {

    return (
        <div className={styles.slider_item} >
            <img src={data.imgURL} className={styles.slider_img} />

            <div className={styles.slider_text} >
                <small className={styles.slider_number} >/ 01</small>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    )
}



const GlassSection = () => {
    const [, setPointerState] = useAtom(setPointer)

    const onEnter = () => {
        setPointerState({focus: false, active: true, background: 'white', color: '#000000', text: 'About'})
    }
    const onOut = () => {
        setPointerState({active: false, text: 'Sein'})
    }
    
    return (
        <section className={styles.glass} onPointerEnter={onEnter} onPointerLeave={onOut} >
            <h4>/ WHAT</h4>
            <p>Genitive singular form of sei. Instructive plural form of sei. NounEdit. sein. Instructive plural form of see.</p>
        </section>
    )
}
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { isLoadingPage, isMenuActive, LoadingEffect } from '../../store'
import styles from './layout.module.css'

export default function Layout(props: JSX.IntrinsicElements['div']) {
    const [,toggleMenu] = useAtom(isMenuActive)
    const [isLoading, setIsLoading] = useAtom(isLoadingPage)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            <LoadingEffect />
            <div className={styles.mainLayout} >
                <MenuButton className={styles.menuButton} onClick={() => toggleMenu(prev => !prev)} />
            </div>
            <Menu />
            {props.children}
        </>
    )
    
}



const MenuButton = (props: JSX.IntrinsicElements['button']) => {
    

    return (
        <button {...props} >
            <div className={styles.mb_topLine} />
            <div className={styles.mb_botLine} >
            </div>
            <p className={styles.mb_text} >MENU</p>
        </button>
    )
}


const Menu = () => {
    const [isActive, toggleMenu] = useAtom(isMenuActive)
    const router = useRouter()
    
    const changeRoute = (r: string) => {
        router.push(r)
        toggleMenu(false)
    }

    return (
        <div className={isActive ? styles.menu : `${styles.menu} ${styles.menu_hidden}`} >

            <div className={styles.menu_pageNav}>
                <a onClick={() => changeRoute('/')}>Home</a>
                <a onClick={() => changeRoute('/works')} >Works<small className='text-info' >9</small></a>
                <a>Expertise<small className='text-info' >12</small></a>
                <a>About</a>
                <a>Journal</a>
            </div>

            <div className={styles.menu_lines} />

            <ul className={styles.menu_infos}>
                <a className={styles.menu_address} >
                    <h4>Bandung</h4>
                    <p>Somewhere near a train station</p>
                    <p>Indonesia</p>
                </a>
                <a className={styles.menu_address}>
                    <h4>Munich</h4>
                    <p>keineideestrasse, 123 Munich Germany. </p>
                    <p>Germany</p>
                </a>        

                <li className={styles.menu_miniNav}>
                    <a>Awards</a>
                    <a>Brands</a>
                    <a>Careers</a>
                </li>       

                <li className={styles.menu_contacts} >
                    <nav>
                        <a title='GitHub' >Gh</a>
                        <a title='LinkedIn'>Li</a>
                        <a title='Twitter'>Tw</a>
                    </nav>
                    <nav>
                        <a>Terms.</a>
                        <a>Sitemap.</a>
                    </nav>
                </li>

            </ul>

        </div>
    )
}


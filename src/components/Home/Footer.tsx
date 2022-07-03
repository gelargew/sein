import styles from './styles/footer.module.css'


export default function Footer() {

    return (
        <section   className={styles.footer} >
            <div onClick={() => console.log('asdsd')} className={styles.ftr_content} >
                <h2 >website by: <a href='https://gelar.dev/' target='_blank' rel='noreferrer' >gelar.dev</a></h2>

                <div className={styles.ftr_nav} >
                    <ul className={styles.ftr_menu}>
                        <li className={styles.ftr_menu_address} >
                            <h4>Bandung</h4>
                            <h5>STRINGER.LTD</h5>
                            <p>Somewhere near a train station</p>
                        </li>
                        <li className={styles.ftr_menu_address}>
                            <h4>Munich</h4>
                            <h5>Weichei AG</h5>
                            <p>keineideestrasse, 123 Munich Germany. </p>
                        </li>

                        <li className={styles.ftr_menu_nav}>
                            <a>Home</a>
                            <a>Works</a>
                            <a>Expertise</a>
                            <a>About</a>
                        </li>

                        <li className={styles.ftr_menu_nav}>
                            <a>Awards</a>
                            <a>Brands</a>
                            <a>Careers</a>
                        </li>

                    </ul>

                    <nav>
                        <a title='GitHub' >Gh</a>
                        <a title='LinkedIn'>Li</a>
                    </nav>
                </div>




            </div>
            <div className={styles.footer_mask}>
                </div>          
        </section>
    )
}
import styles from './styles/main.module.css'

export default function Main() {

    return (
        <div className={styles.main} >
            <h1>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>



            <div className={styles.content} >

                <section className={styles.content_left} >
                    <div className={styles.hole1} />
                    <div className={styles.content1}>
                        <h3>content1</h3>
                        <p>LOREM IPSUM ma</p>
                    </div>

                </section>

                <div className={styles.contentGap} />

                <section className={styles.content_right}>
                    <div className={styles.max_right}>

                    </div>

                    <h1></h1>CONTENT RIGHT
                </section>




            </div>
        </div>
    )
}
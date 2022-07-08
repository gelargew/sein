import StackSlider from "../components/core/StackSlider";
import styles from '../styles/test.module.css'
import { a } from 'react-spring'
import { useState } from "react";

export default function Test() {
    const [page, setPage] = useState(0)

    return (
        <main>
            <StackSlider className={styles.stackslider} page={page} >
                <div data-stackitem={0} >
                    <h1>ASDAS</h1>
                    <img src='/images/cloudman.jpg' />
                </div>
                <div data-stackitem={1} >
                <h1>ASDAS</h1>
                    <img src='/images/desk2.webp' />
                </div>
                <div data-stackitem={2} >
                <h1>ASDAS</h1>
                    <img src='/images/panther.jpg' />
                </div>
            </StackSlider>
            <button onClick={() => setPage(page + 1)}>NEXT</button>
            <button onClick={() => setPage(page - 1)}>PREV</button>
        </main>
    )
}
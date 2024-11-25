import Link from "next/link";
import styles from '../app/styles/Home.module.css';

export default function Footer(){
    return(
        <main>
        <div className={styles.endline}></div>

        <div className={styles.footer}>
        <p className={styles.text1}>All the copyright reserved 2024</p>
        <div className={styles.links}>
        <Link className={styles.text1} href={'https://www.linkedin.com/in/iqra-ali-0972a7179/'}><p>linkedIn /</p></Link>
        <Link className={styles.text1} href={'https://github.com/iqzar'}><p>github /</p></Link>
        <Link className={styles.text1} href={'mailto:iqraa7191@gmail.com'}><p>gmail</p></Link>
        </div>
      </div>
      </main>
    )
}
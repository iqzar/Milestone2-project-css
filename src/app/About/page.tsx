import styles from '../styles/About.module.css';
import image from '../public/dp.png'
import Image from 'next/image';
import Link from 'next/link';

export default function About(){
    return(
        <main className={styles.main}>
            <Image className={styles.dp} src={image} width={200} height={200} alt='dp'/>
            <h2 className={styles.title}>Meet Me</h2>
            <p className={styles.text}>I am an enthusiastic learner currently pursuing an IT course, building on my strong foundation in commerce, where I completed my master s degree. My diverse background equips me with a unique perspective on technology and business, enabling me to blend analytical thinking with creative problem-solving. Beyond my academic pursuits, I am passionate about creativity and enjoy making DIY projects that reflect my innovative spirit. Additionally, I have cultivated skills in calligraphy and painting, which allow me to express myself artistically and appreciate the beauty in detail and design. I thrive in environments that challenge me to grow and push the boundaries of my creativity while integrating technology into my projects.</p>
            <div className={styles.endline}></div>

            <div className={styles.footer}>
            <p className={styles.text1}>All the copyright reserved 2024</p>
            <div className={styles.links}>
            <Link className={styles.text1} href={'/'}><p>linkedIn /</p></Link>
            <Link className={styles.text1} href={'/'}><p>github /</p></Link>
            <Link className={styles.text1} href={'/'}><p>gmail</p></Link>
            </div>
            </div>
        </main>
        
    )
}
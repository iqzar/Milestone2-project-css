'use client'

import Image from "next/image";
import styles from './styles/Home.module.css';
import Link from "next/link";
import dp from './public/dp.png';
import deal from './public/deal.jpg';
import { X , AppWindow, LayoutTemplate,FolderCode, ImagePlus  } from 'lucide-react';

export default function Home() {
 

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
         

          <div className={styles.hero}>
            <Image className={styles.dp} src={dp} width={100} height={100} alt="Profile Picture" />
            <h1 className={styles.title}>
            Transforming ideas <br /> into responsive, pixel-perfect <br /> digital solutions.
            </h1>

            <button className={styles.bbtn}>Latest work</button>
          </div>
        </div>
      </div>

    

      <div className={styles.main2}>
    <div className={styles.container2}>
      <div className={styles.skills1}>
      <p>typescript</p> 
      <p>html</p>
      <p>css </p></div>
      <div className={styles.skills2}>
      <p>canva</p>
      <p>tailwindcss</p>
      <p>Nextjs</p></div>
    </div>

    <p className={styles.title2}>Turning ideas into digital experiences<br/> with skills and design tools.</p>
    
     {/* Services */}

    <div className={styles.ser}>
    <div className={styles.line}></div>
    <button className={styles.wbtn}>Services</button>
    <div className={styles.line}></div>
    </div>

    <div className={styles.detail}>

{/* Service 1 */}
<div className={styles.part1}>

    <div>
    <AppWindow />
      <h2>UI UX</h2>
      <p className={styles.text2}>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
    </div>


{/* Service 1 */}
    <div>
      <LayoutTemplate/>
      <h2>Websites</h2>
      <p className={styles.text2}>Transforming ideas into exceptional web and mobile app experiences.</p>
    </div>

</div>

<div className={styles.part2}>
{/* Service 1 */}
    <div>
      <ImagePlus/>
      <h2>Design</h2>
      <p className={styles.text2}>Crafting visually stunning designs that connect with your

audience.</p>
    </div>

{/* Service 1 */}
    <div>
      <FolderCode/>
      <h2>Development</h2>
      <p className={styles.text2}>Bringing your vision to life with the latest technology and design trends.</p>
    </div>
</div>
    </div>

    <div className={styles.container3}>
    <div className={styles.hero}>
        <Image className={styles.dp} src={deal} width={100} height={100} alt="" />
        <h1 className={styles.title}>
          Tell me about your<br/>
          next project.
        </h1>

        <div className={styles.btns}> 
        <div><button className={styles.w1btn} >Email</button></div>
      
        <div><button className={styles.b1btn} >Whatsapp</button></div>
        </div> 

{/*Footer*/}
        <div className={styles.endline}></div>

        <div className={styles.footer}>
        <p className={styles.text1}>All the copyright reserved 2024</p>
        <div className={styles.links}>
        <Link className={styles.text1} href={'/'}><p>linkedIn /</p></Link>
        <Link className={styles.text1} href={'/'}><p>github /</p></Link>
        <Link className={styles.text1} href={'/'}><p>gmail</p></Link>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}


import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Contact.module.css'; // Import the CSS module

export default function ContactUs() {
    return (
        <main className={styles.bgBlack}>
        
            <div className={`${styles.bgBlack} ${styles.flexCenter}`}>
                <h1 className={styles.heading}>Contact Us</h1>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            className={styles.textarea}
                            required
                        ></textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Send Message</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

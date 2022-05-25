import styles from './Impressum.module.css';
import sharedStyles from '../shared.module.css';

function Impressum(props) {
    return (
        <div>
            <div class={styles.section}>
                <div class={`${sharedStyles.title} ${styles.title}`}>Impressum</div>
                <span class={styles.subtitle}>Daniel Fritz</span>
                <span class={styles.subtitle}>Waldparkstr. 26</span>
                <span class={styles.subtitle}>68163 Mannheim</span>
                <span class={styles.subtitle}>Germany</span>
            </div>

            <div class={styles.section}>
                <div class={`${sharedStyles.title} ${styles.title}`}>Contact</div>
                <div>
                    <a href="mailto:contact.kellojo@gmail.com">contact.kellojo@gmail.com</a>
                </div>
            </div>
            
        </div>
        
    );
}

export default Impressum;

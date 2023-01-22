import styles from './Impressum.module.css';
import sharedStyles from '../shared.module.css';

function Impressum(props) {
    return (
        <div>
        
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

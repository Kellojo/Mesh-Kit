import styles from './Entry.module.css';
import Button from '../button/Button';

function Entry(props) {
    return (
        <div class={styles.entry}>
            <img src={props.previewUrl} class={styles.img} />
            <div class={styles.header}>
                <span>{props.title}</span>
                <div class={styles.downloadContainer}>
                    <Button text=".blend"></Button>
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Entry;

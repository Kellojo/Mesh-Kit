import styles from './Entry.module.css';
import Button from '../button/Button';

function downloadFile(file) {
   window.open(file, "_blank");
}

function Entry(props) {
    return (
        <div class={styles.entry}>
            <img src={props.previewUrl} class={styles.img} alt={`Preview of ${props.title}`} />
            <div class={styles.header}>
                <span>{props.title}</span>
                <div class={styles.downloadContainer}>
                    

                    <For each={Object.keys(props.downloads)}>{
                        key => {
                            const download = props.downloads[key];

                            return (<Button onClick={downloadFile.bind(this, download)} text={key}></Button>);
                        }
                    }</For>
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Entry;

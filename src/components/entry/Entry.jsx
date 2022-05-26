import styles from './Entry.module.css';
import Button from '../button/Button';
import sharedStyles from '../shared.module.css';
import Config from '../../Config';


function downloadFile(file) {
   window.open(file, "_blank");
}

function fadeInImage() {
    this.style.opacity = 1;
}

function isRecent(dateString) {
    const now = new Date();
    now.setDate(now.getDate() - Config.DAYS_UNTIL_NOT_NEW);

    return now <= new Date(dateString);
}

function Entry(props) {

    let newText = null;
    
    const isNew = isRecent(props.createdAt);
    const isRecentlyModified = isRecent(props.lastModifiedAt);
    if (isRecentlyModified) {
        newText = <span class={`${styles.newText} ${sharedStyles.brandText}`}>updated</span>;
    }
    if (isNew) {
        newText = <span class={`${styles.newText} ${sharedStyles.brandText}`}>new</span>;
    }


    return (
        <div class={styles.entry}>
            {newText}
            <img src={props.previewUrl} class={styles.img} alt={`Preview of ${props.title}`} onload={fadeInImage}  />
            <div class={styles.header}>
                
                <div class={styles.titleContainer}>
                    <span>{props.title}</span>
                </div>

                

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

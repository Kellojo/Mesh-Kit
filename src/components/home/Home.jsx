import styles from './Home.module.css';
import Entry from '../entry/Entry';
import Assets from "../../assets/assets.json";




function formatNumber(number) {
    if (isNaN(number)) number = 0;

    return number.toLocaleString();
}

function randomEntry() {
    return Assets.meshes[Math.floor(Math.random() * (Assets.meshes.length - 1))];
}

var entry = randomEntry();

function Home(props) {
    return (
        <div class={styles.container}>

            <div>
                <div class={styles.titleContainer}>
                    <span class={styles.title}>Free Assets for You!</span>
                    <span class={styles.description}>All assets in this library are distributed under the <a href="https://github.com/Kellojo/Mesh-Kit-Library/blob/main/LICENSE" target="_blank">MIT license</a>. Feel free to include them in your personal or commercial projects. If you fancy, a small donation is always welcome and helps me out a ton!</span>
                </div>

                <Entry title={entry.name} previewUrl={entry.previewUrl} downloads={entry.downloads}/>


            </div>
            

            <div class={styles.counterContainer}>
                <div class={styles.card}>
                    <span class={styles.counter}>{formatNumber(Assets.statistics.meshes?.count)}</span>
                    <span class={styles.title}>Meshes</span>
                </div>

                <div class={styles.card}>
                    <span class={styles.counter}>{formatNumber(Assets.statistics.materials?.count)}</span>
                    <span class={styles.title}>Materials</span>
                </div>

                <div class={styles.card}>
                    <span class={styles.counter}>{formatNumber(Assets.statistics.textures?.count)}</span>
                    <span class={styles.title}>Textures</span>
                </div>
            </div>

            <div>
                Donate
            </div>
            
        </div>
        
    );
}

export default Home;

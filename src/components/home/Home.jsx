import styles from './Home.module.css';
import sharedstyles from '../shared.module.css';
import Entry from '../entry/Entry';
import Assets from "../../assets/assets.json";
import Button from '../button/Button';
import RouteName from '../../RouteName';
import { useNavigate } from "solid-app-router";




function randomEntry() {
    return Assets.meshes[Math.floor(Math.random() * (Assets.meshes.length - 1))];
}

var entry1 = randomEntry();
var entry2 = randomEntry();

function Home(props) {
    const navigate = useNavigate();

    function navigateToLibrary() {
        navigate(RouteName.Library);
    }


    return (
        <div class={styles.container}>

            <div class={styles.mainMessageContainer}>
                <div class={styles.titleContainer}>
                    <span class={sharedstyles.title}>Free Assets for You!</span>
                    <span class={styles.description}>All assets in this library are distributed under the <a href="https://github.com/Kellojo/Mesh-Kit-Library/blob/main/LICENSE" target="_blank">MIT license</a>. Feel free to include them in your personal or commercial projects. Also, make sure to share your results and show what you've been able to achieve with the assets.</span>
                    <Button onClick={() => { navigateToLibrary();}} class={styles.visitLibraryButton} text="Visit the Library" />
                </div>

                <Entry title={entry1.name} previewUrl={entry1.previewUrl} downloads={entry1.downloads} createdAt={entry1.createdAt} lastModifiedAt={entry1.lastModifiedAt}/>
            </div>
            
            <div class={styles.secondaryMessageContainer}>
                <Entry title={entry2.name} previewUrl={entry2.previewUrl} downloads={entry2.downloads} createdAt={entry2.createdAt} lastModifiedAt={entry2.lastModifiedAt} />

                <div class={styles.titleContainer}>
                    <span class={sharedstyles.title}>Made with Love and Care.</span>
                    <span class={styles.description}>The assets are a side product of the many (and I really do mean many!) game projects I have been working on so far. They usually follow a similar low poly style but you might be able to find some in different styles as well. If you find any of the assets useful or would like to contribute please feel free to donate, it helps me out a ton!</span>
                </div>
            </div>
            
        </div>
        
    );
}

export default Home;

import styles from './Library.module.css';
import Entry from '../entry/Entry';
import Grid from '../grid/Grid';

function Library(props) {
    return (
        <div>
            <div class={styles.text}>All assets in this library are distributed under the MIT license. Feel free to include them in your personal or commercial projects. If you fancy a small donation is always welcome and helps me out a ton!</div>
            <Grid>
                <For each={props.assets}>{
                    entry => {
                        return (<Entry title={entry.name} previewUrl={entry.previewUrl} downloads={entry.downloads}/>);
                    }
                }</For>
            </Grid>
        </div>
        
    );
}

export default Library;

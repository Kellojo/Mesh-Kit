import styles from './Grid.module.css';

function Grid(props) {
    return (
        <div class={styles.grid}>{props.children}</div>
    );
}

export default Grid;

import styles from './Button.module.css';

function Button(props) {
    return (
        <button class={styles.button} onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;

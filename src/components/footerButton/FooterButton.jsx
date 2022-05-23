import styles from './FooterButton.module.css';

function FooterButton(props) {
    return (
        <button class={styles.button} onClick={props.onClick}>{props.children}</button>
    );
}

export default FooterButton;

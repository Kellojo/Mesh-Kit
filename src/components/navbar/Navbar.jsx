
import styles from './Navbar.module.css';
import { createSignal, For } from "solid-js";
import { NavLink } from "solid-app-router";


const options = [{
    text: "Library",
    href: "/library"
}, {
    text: "License",
    href: "/license"
}, {
    text: "Impressum",
    href: "/impressum"
}];


function Navbar() {
    return (

        <div class={styles.navbar}>
            <For each={options}>{
                entry => {
                    return (<NavLink href={entry.href} value={entry.text} inactiveClass={styles.inactive} activeClass={styles.active} >
                        {entry.text}
                    </NavLink>);
                }
            }</For>
        </div>

    );
}

export default Navbar;

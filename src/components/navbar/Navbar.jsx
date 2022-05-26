
import styles from './Navbar.module.css';
import { For } from "solid-js";
import { NavLink } from "solid-app-router";
import RouteName from '../../RouteName';
import Button from '../button/Button';
import sharedStyles from '../shared.module.css';


const options = [{
    text: "Home",
    href: RouteName.Home,
    classes: null,
},{
    text: "Library",
    href: RouteName.Library,
    classes: null,
}];


function Navbar() {
    return (

        <div class={styles.navbar}>
            <For each={options}>{
                entry => {
                    return (<NavLink class={entry.classes} href={entry.href} value={entry.text} inactiveClass={styles.inactive} activeClass={styles.active} >
                        {entry.text}
                    </NavLink>);
                }
            }</For>

            <div class={styles.spacerLeft}>
                <Button text="Donate" />
            </div>

        </div>

    );
}

export default Navbar;

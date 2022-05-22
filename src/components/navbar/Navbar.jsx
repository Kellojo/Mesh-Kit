
import styles from './Navbar.module.css';
import { For } from "solid-js";
import { NavLink } from "solid-app-router";
import RouteName from '../../RouteName';
import Button from '../button/Button';


const options = [{
    text: "Home",
    href: RouteName.Home,
},{
    text: "Library",
    href: RouteName.Library,
}, {
    text: "Impressum",
    href: RouteName.Impressum,
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

            <div class={styles.spacerLeft}>
                <Button text="Donate" />
            </div>

        </div>

    );
}

export default Navbar;

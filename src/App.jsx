import styles from './App.module.css';
import Library from './components/library/Library';
import Impressum from './components/impressum/Impressum';
import Home from './components/home/Home';
import FooterButton from './components/footerButton/FooterButton';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Navigate, NavLink } from "solid-app-router";
import RouteName from './RouteName';
import sharedStyles from './components/shared.module.css';
import navStyles from './components/navbar/Navbar.module.css';


import Assets from "./assets/assets.json";

function App() {
    return (
        <div class={styles.app}>

            <div class={styles.resize}>

                <header class={styles.header}>
                    <span class={styles.title}>Mesh Kit</span>
                    <Navbar />
                </header>

                <div class={styles.content}>

                    <Routes>
                        <Route path="/">
                            <Navigate href={RouteName.Home} />
                        </Route>
                        <Route path={RouteName.Home} element={<Home />} />
                        <Route path={RouteName.Library} element={<Library assets={Assets.meshes} />} />
                        <Route path={RouteName.Impressum} element={<Impressum />} />
                    </Routes>

                </div>

                <footer class={styles.footer}>
                    <FooterButton onClick={() => { window.open("https://github.com/kellojo", "_blank"); }}>
                        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" fill="#565656" data-view-component="true">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </FooterButton>

                    <NavLink href={RouteName.Impressum} inactiveClass={navStyles.inactive} activeClass={navStyles.active}>
                        Impressum
                    </NavLink>
                   
                </footer>

            </div>
        </div>
    );
}

export default App;

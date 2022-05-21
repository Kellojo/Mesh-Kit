import styles from './App.module.css';
import Library from './components/library/Library';
import Impressum from './components/impressum/Impressum';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Navigate } from "solid-app-router"

import Assets from "./assets/assets.json";

function App() {
    return (
        <div class={styles.app}>
            <header class={styles.header}>
                <span class={styles.title}>Mesh Kit</span>
                <Navbar />
            </header>

            <div class={styles.content}>

                <Routes>
                    <Route path="/">
                        <Navigate href="/library" />
                    </Route>
                    <Route path="/library" element={<Library assets={Assets.meshes} />} />
                    <Route path="/impressum" element={<Impressum />} />
                </Routes>

                
            </div>
        </div>
    );
}

export default App;

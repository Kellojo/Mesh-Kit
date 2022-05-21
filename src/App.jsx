import styles from './App.module.css';
import Library from './components/library/Library';
import Impressum from './components/impressum/Impressum';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "solid-app-router"


function App() {
    return (
        <div class={styles.app}>
            <header class={styles.header}>
                <span class={styles.title}>Mesh Kit</span>
                <Navbar />
            </header>

            <div class={styles.content}>

                <Routes>
                    <Route path="/library" element={<Library />} />
                    <Route path="/impressum" element={<Impressum />} />
                </Routes>

                
            </div>
        </div>
    );
}

export default App;

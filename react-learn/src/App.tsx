import './App.css';
import Header from "./components/Header.tsx";
import CoreConcepts from "./components/CoreConcepts.tsx";
import Examples from "./components/Examples.tsx";
import Game from "./components/Game.tsx";

function App() {
    return (
        <>
            <Header/>
            <CoreConcepts/>
            <Examples/>
            <Game/>
        </>
    )
}

export default App

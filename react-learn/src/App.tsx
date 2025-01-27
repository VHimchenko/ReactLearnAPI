import './App.css';
import Header from "./components/core/Header.tsx";
import CoreConcepts from "./components/core/CoreConcepts.tsx";
import Examples from "./components/core/Examples.tsx";
import Game from "./components/game/Game.tsx";

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

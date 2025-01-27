import './App.css';
import Header from "./components/Core/Header.tsx";
import CoreConcepts from "./components/Core/CoreConcepts.tsx";
import Examples from "./components/Core/Examples.tsx";
import Game from "./components/Game/Game.tsx";

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

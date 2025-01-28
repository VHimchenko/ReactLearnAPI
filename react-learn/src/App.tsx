import './App.css';
import Header from "./components/core/Header.tsx";
import CoreConcepts from "./components/core/CoreConcepts.tsx";
import Examples from "./components/core/Examples.tsx";
import Game from "./components/game/Game.tsx";
import InvestmentCalculator from "./components/investment-calculator/InvestmentCalculator.tsx";

function App() {
    return (
        <>
            <Header/>
            <CoreConcepts/>
            <Examples/>
            <hr/>
            <Game/>
            <hr/>
            <InvestmentCalculator/>
        </>
    )
}

export default App

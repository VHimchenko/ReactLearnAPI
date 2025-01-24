import Players from "./Players.tsx";
import GameBoard from "./GameBoard.tsx";
import GameLog from "./GameLog.tsx";
import {useState} from "react";

export default function Game() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState<string[]>([]);

    function handleSelectSquare() {
        setActivePlayer((curActive) => {
            return curActive === 'X'
                ? 'O' : 'X';
        })
    }

    return (
        <main>
            <div id="game-container">
                <Players activePlayer={activePlayer}/>
                <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare}/>
            </div>
            <GameLog/>
        </main>
    );
}
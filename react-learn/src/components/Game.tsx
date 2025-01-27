import Players from "./Players.tsx";
import GameBoard from "./GameBoard.tsx";
import GameLog from "./GameLog.tsx";
import {useState} from "react";

export interface IGameTurns {
    square: {row: number, col: number},
    player: string;
}

export default function Game() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState<IGameTurns[]>([]);

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setActivePlayer((curActive) => {
            return curActive === 'X'
                ? 'O' : 'X';
        });
        setGameTurns((prevTurns: IGameTurns[]) => {
            let currentPlayer = 'X';
            if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
                currentPlayer = 'O'
            }

            return [
                {
                    square: {row: rowIndex, col: colIndex},
                    player: currentPlayer
                }, ...prevTurns
            ];
        });
    }

    return (
        <main>
            <div id="game-container">
                <Players activePlayer={activePlayer}/>
                <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare}/>
            </div>
            <GameLog logItems={gameTurns}/>
        </main>
    );
}
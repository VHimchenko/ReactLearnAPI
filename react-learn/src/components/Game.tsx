import Players from "./Players.tsx";
import GameBoard from "./GameBoard.tsx";
import GameLog from "./GameLog.tsx";

export default function Game() {
    return (
        <main>
            <div id="game-container">
                <Players/>
                <GameBoard/>
            </div>
            <GameLog/>
        </main>
    );
}
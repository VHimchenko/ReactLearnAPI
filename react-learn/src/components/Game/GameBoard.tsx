import {IGameTurns} from "./Game.tsx";

export interface IGameBoardProps {
    onSelectSquare: (row: number, col: number) => void;
    turns: IGameTurns[];
}

const initialGameBoard: string|null[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard(props: IGameBoardProps) {
    const gameBoard = (initialGameBoard as (string | null)[][]).map(row => [...row]);
    for(const turn of props.turns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player!;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row: (string | null)[], rowIndex: number) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((cell, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button className="field-button" onClick={() => {
                                            //handleSelectSquare(rowIndex, colIndex)
                                            props.onSelectSquare(rowIndex, colIndex)
                                        }}>
                                            {cell}
                                        </button>
                                    </li>
                                )
                            })}
                        </ol>
                    </li>
                )
            })}
        </ol>
    );
}
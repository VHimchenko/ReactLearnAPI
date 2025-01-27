import {useState} from "react";

export interface IGameBoardProps {
    onSelectSquare: (row: number, col: number) => void;
    activePlayerSymbol: string;
}

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard(props: IGameBoardProps) {
    const [gameBoard, setGameBoard] = useState<Array<Array<null | string>>>(initialGameBoard);

    function handleSelectSquare(rowIndex: number, colIndex: number){
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[rowIndex][colIndex] = props.activePlayerSymbol;
            return newGameBoard;
        });

        props.onSelectSquare(rowIndex, colIndex);
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((cell, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button className="field-button" onClick={() => {
                                            handleSelectSquare(rowIndex, colIndex)
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
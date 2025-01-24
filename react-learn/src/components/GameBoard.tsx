import {useState} from "react";

export interface IGameBoardProps {
    onSelectSquare: () => void;
}

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard(props: IGameBoardProps) {
    /*const [gameBoard, setGameBoard] = useState<Array<Array<null | string>>>(initialGameBoard);

    function handleSelectSquare(rowIndex: number, colIndex: number){
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[rowIndex][colIndex] = props.activePlayerSymbol;
            return newGameBoard;
        });

        props.onSelectSquare();
    }*/

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((cell, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button className="field-button"
                                                onClick={(props.onSelectSquare) => {
                                                    //handleSelectSquare(rowIndex,colIndex)
                                                    return props.onSelectSquare(rowIndex, colIndex);
                                                }
                                        }>
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
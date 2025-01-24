import {useState} from "react";

export interface IGameLogProps {
    logItem: string;
}

export default function GameLog() {

    const gameLogArray: string[] = [];

    return (
        <ol id="game-log">
            gameLogArray.map((item: string) => {
                (<li>{item}</li>)
            });
        </ol>
    );
}
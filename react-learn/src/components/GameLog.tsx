//import {useState} from "react";
import {IGameTurns} from "./Game.tsx";

export interface IGameLogProps {
    logItems: IGameTurns[];
}

export default function GameLog(props: IGameLogProps) {

    //const gameLogArray: string[] = [];

    return (
        <ol id="game-log">
            props.logItems.map((logItem: IGameTurns) => {
                return (
                    <li>logItem.</li>
                )
            });
        </ol>
    );
}
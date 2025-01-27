import {IGameTurns} from "./Game.tsx";

export interface IGameLogProps {
    logItems: IGameTurns[];
}

export default function GameLog(props: IGameLogProps) {
    return (
        <ol id="game-log">
            {props.logItems.map((logItem: IGameTurns) => {
                const {square, player} = logItem;
                return (<li>{`${player}: [${square.row},${square.col}]`}</li>)
            })}
        </ol>
    );
}


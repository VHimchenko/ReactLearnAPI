import {PropsWithChildren, useState} from "react";
import * as React from "react";

export interface IPlayerProps extends PropsWithChildren{
    initialName: string;
}

export default function Player(props: IPlayerProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(props.initialName);

    function handleEditSaveClick() {
        setIsEditing(isEditing => !isEditing);
    }

    function handlePlayersNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let playerNameControl = <span className="player-data">{playerName}</span>
    if(isEditing) {
        playerNameControl = (<input type="text"
                             required value={playerName} onChange={handlePlayersNameChange}/>)
    }

    return (
        <li>
            <span className="player">{props.children}
                {playerNameControl}
                <span className="player-symbol">{props.children}</span>
            </span>
            <button onClick={handleEditSaveClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
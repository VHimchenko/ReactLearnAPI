import Player from "./Player.tsx";

interface IPlayersProps {
    activePlayer: string
}

export default function Players(props: IPlayersProps) {
    return (
        <ol id="players" className="highlight-player">
            <Player initialName="Max" isActive={props.activePlayer === 'X'}>X</Player>
            <Player initialName="Alex" isActive={props.activePlayer === 'O'}>O</Player>
        </ol>
    );
}
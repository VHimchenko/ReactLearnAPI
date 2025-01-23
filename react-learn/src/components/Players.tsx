import Player from "./Player.tsx";

export default function Players() {
    return (
        <ol id="players">
            <Player initialName="Max">X</Player>
            <Player initialName="Alex">O</Player>
        </ol>
    );
}
import {useRef} from "react";

export default function SetName({handleNameSubmit}
                                : {handleNameSubmit: (input: string) => void}) {
    const playerName = useRef<HTMLInputElement>(null);

    return (
        <>
            <input type="text"
                   ref={playerName}
            />
            <button type="button" onClick={() => handleNameSubmit(playerName?.current?.value ?? '')}>Set name</button>
        </>
    )
}
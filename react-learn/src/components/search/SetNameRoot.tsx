import './search.css';
import SetName from "./SetName.tsx";
import SetNameContent from "./SetNameContent.tsx";
import {useState} from "react";

export default function SetNameRoot() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('');

    function handleNameSubmit(nameNew: string) {
        setEnteredPlayerName(nameNew);
    }

    return (
        <>
            <SetName handleNameSubmit={handleNameSubmit}/>
            <SetNameContent nameValue={enteredPlayerName}/>
        </>
    )
}
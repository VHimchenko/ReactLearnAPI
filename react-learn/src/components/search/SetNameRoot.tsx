import './search.css';
import SetName from "./SetName.tsx";
import SetNameContent from "./SetNameContent.tsx";
import {useState} from "react";
import TimerChallenge from "./TimerChallenge.tsx";

export default function SetNameRoot() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('');

    function handleNameSubmit(nameNew: string) {
        setEnteredPlayerName(nameNew);
    }

    return (
        <>
            <SetName handleNameSubmit={handleNameSubmit}/>
            <SetNameContent nameValue={enteredPlayerName}/>
            <div id="challenges">
                <TimerChallenge title="Easy" targetTime={1}/>
                <TimerChallenge title="Medium" targetTime={5}/>
                <TimerChallenge title="Hard" targetTime={10}/>
                <TimerChallenge title="Very hard" targetTime={15}/>
            </div>
        </>
    )
}
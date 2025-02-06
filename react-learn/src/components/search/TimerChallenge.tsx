import {useRef, useState} from "react";
//import ResultModal from "./ResultModal.tsx";

export default function TimerChallenge({title, targetTime}:{title: string, targetTime: number}) {
    const dialog = useRef<HTMLDialogElement>(null);
    const timer = useRef<number>();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            if (dialog.current) {
                dialog.current.open = true;
            }
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current)
        setTimerStarted(false);
    }

    return (
        <>
{/*        <ResultModal result="lost" targetTime={targetTime} ref={dialog} />*/}
        <section className="challenges">
            <h2>{title}</h2>
            {timerExpired && <p>Time's up!</p>}
            <p className="challendge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={
                    timerStarted
                        ? handleStop
                        : handleStart
                }>
                    {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
                </button>
            </p>
            {
                timerStarted
                    ? (<p className="active">Running</p>)
                    : (<p className="">Not running</p>)
            }
        </section>
        </>
    )
}
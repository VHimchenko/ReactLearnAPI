import {forwardRef, LegacyRef, useImperativeHandle, useRef} from "react";

export interface IResultModalProps{
    result: string;
    targetTime: number
}

const ResultModal = forwardRef(
    function ResultModal(props: IResultModalProps,
                         ref: LegacyRef<HTMLDialogElement>){

    const dialog = useRef<HTMLDialogElement>();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current?.showModal();
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {props.result}</h2>
            <p>
                The target time was <strong>{props.targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;
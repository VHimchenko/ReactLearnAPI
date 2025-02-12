import {PropsWithChildren, useRef} from "react";
import {createPortal} from "react-dom";

interface IModalProps extends PropsWithChildren {
    open: boolean;
}

function Modal(props: IModalProps) {
    const dialog = useRef<HTMLDialogElement>(null);

    if (dialog.current) {
        if (props.open) {
            if (!dialog.current.open)
                dialog.current?.showModal();
        } else {
            if (dialog.current.open)
                dialog.current.close();
        }
    }

    return createPortal(
        <dialog className="modal" ref={dialog} open={props.open}>
            {props.children}
        </dialog>,
        document.getElementById('modal') ?? document.body
    );
}

export default Modal;
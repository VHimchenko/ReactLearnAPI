import {forwardRef, PropsWithChildren, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import * as React from "react";

interface InputRef {
    showModal: () => void;
    close: () => void;
}


const Modal = forwardRef<InputRef, PropsWithChildren>(
    function Modal(props: PropsWithChildren, ref: React.Ref<InputRef>) {
        const dialog = useRef<HTMLDialogElement>(null);

        useImperativeHandle(ref, () => ({
            showModal: () => {
                dialog.current?.showModal();
            },
            close: () => {
                dialog.current?.close();
            },
        }));

        return createPortal(
            <dialog className="modal" ref={dialog}>
                {props.children}
            </dialog>,
            document.getElementById('modal') ?? document.body
        );
    });

export default Modal;
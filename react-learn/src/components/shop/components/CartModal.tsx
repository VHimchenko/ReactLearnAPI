import {forwardRef, useImperativeHandle, useRef} from "react";
import Cart from "./Cart.tsx";
import {createPortal} from "react-dom";
import * as React from "react";

const CartModal = forwardRef(
        function Modal({title, actions}
                       :{
                           title: string,
                           actions: () => React.ReactElement;
                       },
                       ref
        ) {
            const dialog = useRef<HTMLDialogElement | null>(null);

            useImperativeHandle(ref, () => {
               return {
                   open: () => {
                       dialog.current?.showModal();
                   }
               }
            });

            return createPortal(
                <dialog id="modal" ref={dialog}>
                    <h2>{title}</h2>
                    <Cart />
                    <form method="dialog" id="modal-actions">
                        {actions}
                    </form>
                </dialog>,
                document.getElementById('modal'));
        });

export default CartModal;
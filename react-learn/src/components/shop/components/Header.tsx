import {useContext, useRef} from "react";
import {CartContext} from "../store/CartContext.tsx";
import CartModal from "./CartModal.tsx";

export default function Header() {
    const modal = useRef();
    const {items, updateCartQuantity} = useContext(CartContext);

    const cartQuantity = items.length;

    let modalActions = () => <button>Close</button>
    if(cartQuantity > 0){
        modalActions = () => (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }

    return (
        <>
            <CartModal ref={modal}
                       title="Your Cart"
                       actions={modalActions}
            />

            <h1>
            <img alt="Elegant content" src="https://i.pinimg.com/originals/18/2e/65/182e654e1ac146f0196f9adb5ad24742.jpg"/>
            Elegant context
            <button className="cart-button" onClick={() => {updateCartQuantity(items[0], items[0]?.count + 1)}}>Cart ({items.length})</button>
            </h1>
        </>
    )
}
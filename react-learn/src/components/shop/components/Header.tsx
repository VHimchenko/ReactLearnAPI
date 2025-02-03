import {MouseEventHandler} from "react";

export default function Header({cartItemsCount, onUpdateCartItemQuantity}
                               : {cartItemsCount: number, onUpdateCartItemQuantity: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <>
            <h1>
            <img alt="Elegant content" src="https://i.pinimg.com/originals/18/2e/65/182e654e1ac146f0196f9adb5ad24742.jpg"/>
            Elegant context
            <button className="cart-button" onClick={onUpdateCartItemQuantity}>Cart ({cartItemsCount})</button>
            </h1>
        </>
    )
}
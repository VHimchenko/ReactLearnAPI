import {useContext} from "react";
import {CartContext} from "../store/shopping-cart-context.tsx";

export default function Cart({onUpdateCartItemQuantity}
                             : {onUpdateCartItemQuantity: () => void}   ) {
    const {items} = useContext(CartContext);

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );

    const formattedTotalPrice = totalPrice.toFixed(2);

    return (
        <div id="cart">
            {items.length === 0 && <p>Cart is empty</p>}
            {items.length > 0 && (
                <ul id="cart-items">
                    {items.map((item)=> {
                        const formattedPrice = `$${item.price.toFixed(2)}`;
                        return (
                          <li key={item.id}>
                              {item.title} x {item.quantity} = {formattedPrice}
                          </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}
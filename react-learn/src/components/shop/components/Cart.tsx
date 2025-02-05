import {useContext} from "react";
import {CartContext} from "../store/CartContext.tsx";

export default function Cart() {
    const {items, updateCartQuantity } = useContext(CartContext);

    const totalPrice = items.reduce(
        (acc, cartItem) => acc + cartItem.item.price * cartItem.count, 0
    );

    const formattedTotalPrice = totalPrice.toFixed(2);

    return (
        <div id="cart">
            {items.length === 0 && <p>Cart is empty</p>}
            {items.length > 0 && (
                <ul id="cart-items">
                    {items.map((cartItem)=> {
                        const formattedPrice = `$${cartItem.item.price.toFixed(2)}`;
                        return (
                          <li key={cartItem.item.id}>
                              <div>
                                  <span>{cartItem.item.title}</span>
                                  <span>{formattedPrice}</span>
                              </div>
                              <div className="cart-item-actions">
                                  <button onClick={() => { updateCartQuantity(cartItem, -1) }}>
                                      -
                                  </button>
                                  <button onClick={() => { updateCartQuantity(cartItem, +1) }}>
                                      +
                                  </button>
                              </div>
                              {cartItem.item.title} x {cartItem.count} = {formattedPrice}
                          </li>
                        );
                    })}
                </ul>
            )}
            <p id="cart-total-price">
                Cart Total: <strong>${formattedTotalPrice}</strong>
            </p>
        </div>
    )
}
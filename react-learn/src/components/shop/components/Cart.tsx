import {useContext} from "react";
import {CartContext} from "../store/shopping-cart-context.tsx";

export default function Cart() {
    const {items, updateCartQuantity } = useContext(CartContext);

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
                        const formattedPrice = `$${item.item.price.toFixed(2)}`;
                        return (
                          <li key={item.item.id}>
                              <div>
                                  <span>{item.item.title}</span>
                                  <span>{formattedPrice}</span>
                              </div>
                              <div className="cart-item-actions">
                                  <button onClick={() => { updateCartQuantity(item.item.id, -1) }}>
                                      -
                                  </button>
                                  <button onClick={() => { updateCartQuantity(item.item.id, +1) }}>
                                      +
                                  </button>
                              </div>
                              {item.item.title} x {item.count} = {formattedPrice}
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
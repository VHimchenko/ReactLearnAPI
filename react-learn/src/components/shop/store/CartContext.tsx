import {createContext} from "react";
import {ICartItem} from "../interfaces/interfaces.ts";

export const CartContext = createContext<{
    items: ICartItem[];
    addItemToCart: (item: ICartItem) => void;
    updateCartQuantity: (item: ICartItem, quantity: number) => void;
}>({
    items: [],
    addItemToCart: () => {},
    updateCartQuantity: () => {}
});
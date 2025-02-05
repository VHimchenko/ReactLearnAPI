import {createContext, useReducer, useState} from "react";
import {ICartItem} from "../interfaces/interfaces.ts";
import {DUMMY_PRODUCTS} from "../../../services/data.tsx";

export const CartContext = createContext<{
    items: ICartItem[];
    addItemToCart: (item: ICartItem) => void;
    updateCartQuantity: (item: ICartItem, quantity: number) => void;
}>({
    items: [],
    addItemToCart: () => {},
    updateCartQuantity: () => {}
});

export interface IReducerAction<T> {
    type: string;
    payload: T;
}

export interface IPayloadUpdateCartQuantity {
    item: ICartItem;
    amount: number;
}

export interface IShoppingCartState {
    items: ICartItem[];
}

function shoppingCartReducer<T>(state: IShoppingCartState, action: IReducerAction<T>) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const updatedItems = [...state.items];
            const existingCartItemIndex = updatedItems
                .findIndex((cartItem) => cartItem.item.id === action.payload);

            const existingCartItem = updatedItems[existingCartItemIndex];
            if (existingCartItem) {
                updatedItems[existingCartItemIndex] = {
                    ...existingCartItem,
                    count: existingCartItem.count + 1
                };
            } else {
                const product = DUMMY_PRODUCTS
                    .find(p => p.id === action.payload)!;
                updatedItems.push({
                    item: product,
                    count: 1
                });
            }

            return ({
                ...state,
                items: updatedItems
            })
        }
        case 'UPDATE_ITEM_QUANTITY': {
            const updatedItems = [...state.items];
            const updatedItemIndex = updatedItems
                .findIndex(i => i.item.id === (action.payload as IPayloadUpdateCartQuantity).item.item.id);

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.count += (action.payload as IPayloadUpdateCartQuantity).amount;

            if (updatedItem.count < 1) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                ...state,
                items: updatedItems
            }
        }
        default:
            return state;
    }
}

export default function CartContextProvider({children}: {children: any}) {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        {
            items: []
        }
    );

    function handleAddItemToCart(item: ICartItem) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: item
        });

        const cartItem = cartItems.find(o => o.item.title === item.item.title);
        if (cartItem) {
            cartItem.count++
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, {item: item.item, count: 1}]);
        }
    }

    function onUpdateCartQuantity(item: ICartItem, amount: number) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM_QUANTITY',
            payload: {
                item: item,
                amount: amount
            }
        });
        // setShoppingCart((prevShoppingCart)=>{
        //     const updatedItems = [...prevShoppingCart.items];
        //     const updatedItemIndex = updatedItem.findIndex(i => i.item.id === item.item.id);
        //
        //     const updatedItem = {
        //         ...updatedItems[updatedItemIndex],
        //     };
        //
        //     updatedItem.count += amount;
        //
        //     if(updatedItem.count < 1) {
        //         updatedItems.splice(updatedItemIndex, 1);
        //     } else {
        //         updatedItems[updatedItemIndex] = updatedItem;
        //     }
        //
        //     return {
        //         ...prevShoppingCart,
        //         items: updatedItems
        //     }
        // });
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateCartQuantity: onUpdateCartQuantity
    }

    return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}
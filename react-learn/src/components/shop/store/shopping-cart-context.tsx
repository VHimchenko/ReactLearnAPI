import {useReducer} from "react";
import {ICartItem} from "../interfaces/interfaces.ts";
import {DUMMY_PRODUCTS} from "../../../services/data.tsx";
import {CartContext} from "./CartContext.tsx";

export interface IReducerAction<T> {
    type: string;
    payload: T;
}

export interface IPayloadUpdateCartQuantity {
    productId: number;
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
                .findIndex(i => i.item.id === (action.payload as IPayloadUpdateCartQuantity).productId);

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
    }

    function onUpdateCartQuantity(item: ICartItem, amount: number) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM_QUANTITY',
            payload: {
                productId: item.item.id,
                amount: amount
            }
        });
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateCartQuantity: onUpdateCartQuantity
    }

    return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}
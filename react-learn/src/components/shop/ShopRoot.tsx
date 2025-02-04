import './shop.css'
import ShopCard from "./components/ShopCard.tsx";
import {ICartItem, IShopCard} from "./interfaces/interfaces.ts";
import Header from "./components/Header.tsx";
import {useState} from "react";
import {CartContext} from "./store/shopping-cart-context.tsx";

export default function ShopRoot(){
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    const productItems: IShopCard[] = [
        {id: 1, title:"Test 1", image: "", info: "test info", price: 453.1, description: "test description"},
        {id: 2, title:"Test 2", image: "", info: "test info", price: 453.1, description: "test description"},
        {id: 3, title:"Test 3", image: "", info: "test info", price: 453.1, description: "test description"},
        {id: 4, title:"Test 4", image: "", info: "test info", price: 453.1, description: "test description"},
        {id: 5, title:"Test 5", image: "", info: "test info", price: 453.1, description: "test description"},
        {id: 6, title:"Test 6", image: "", info: "test info", price: 453.1, description: "test description"},
        {id: 7, title:"Test 7", image: "", info: "test info", price: 453.1, description: "test description"}
    ];

    function onAddItemToCart(item: ICartItem) {
        const cartItem = cartItems.find(o => o.item.title === item.item.title);
        if (cartItem) {
            cartItem.count++
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, {item: item.item, count: 1}]);
        }
    }

    function onUpdateCartQuantity(item: ICartItem, newQuantity: number) {
        const  a = item;
        const aa = new newQuantity;
        return (<></>);
    }

    const shoppingCart = {
        items: []
    }

    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: onAddItemToCart,
        updateCartQuantity: onUpdateCartQuantity
    }

    return(
        <CartContext.Provider value={ctxValue}>
        <div id="shop">
            <Header />
            <div className="cards-container">
                {productItems.map(item => {
                    return <ShopCard key={item.title} cardItem={item} />;
                })}
            </div>
        </div>
        </CartContext.Provider>
    )
}
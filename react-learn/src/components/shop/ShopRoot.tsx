import './shop.css'
import ShopCard from "./components/ShopCard.tsx";
import {ICartItem, IShopCard} from "./interfaces/interfaces.ts";
import Header from "./components/Header.tsx";
import {useState} from "react";
import {CartContext} from "./store/shopping-cart-context.tsx";

export default function ShopRoot(){
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);
    const cartItemsCount = 0;

    const productItems: IShopCard[] = [
        {title:"Test 1", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 2", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 3", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 4", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 5", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 6", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 7", image: "", info: "test info", price: 453.1, description: "test description"}
    ];

    function handleUpdateCartItemQuantity(){

    }

    function onAddItemToCart(item: IShopCard) {
        const cartItem = cartItems.find(o => o.item.title === item.title);
        if (cartItem) {
            cartItem.count++
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, {item: item, count: 1}]);
        }
    }

    return(
        <CartContext.Provider value={{ items: []}}>
        <div id="shop">
            <Header cartItemsCount={cartItemsCount} onUpdateCartItemQuantity={handleUpdateCartItemQuantity}/>
            <div className="cards-container">
                {productItems.map(item => {
                    return <ShopCard key={item.title} cardItem={item} onAddToCart={onAddItemToCart}/>;
                })}
            </div>
        </div>
        </CartContext.Provider>
    )
}
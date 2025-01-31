import './shop.css'
import ShopCard from "./ShopCard.tsx";
import {IShopCard} from "./interfaces/interfaces.ts";

export default function ShopRoot(){

    const cartItemsCount = 0;
    const cardItems: IShopCard[] = [
        {title:"Test 1", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 2", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 3", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 4", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 5", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 6", image: "", info: "test info", price: 453.1, description: "test description"},
        {title:"Test 7", image: "", info: "test info", price: 453.1, description: "test description"}
    ];

    return(
        <div id="shop">
            <h1> <img alt="Elegant content" src="https://i.pinimg.com/originals/18/2e/65/182e654e1ac146f0196f9adb5ad24742.jpg"/>
                Elegant context
                <button className="cart-button">Cart ({cartItemsCount})</button>
            </h1>
            <div className="cards-container">
                {cardItems.map(item => {
                    return <ShopCard key={item.title} cardItem={item}/>;
                })}
            </div>
        </div>
    )
}
import {IShopCard} from "../interfaces/interfaces.ts";
import {useContext} from "react";
import {CartContext} from "../store/CartContext.tsx";

export default function ShopCard({cardItem}
                                 : {cardItem: IShopCard}) {

    const {addItemToCart} = useContext(CartContext);

    return (
        <div className="card">
            <img src={cardItem.image} alt="Test image"/>
            <h5 className="card-title">{cardItem.title}</h5>
            <p className="card-price">{cardItem.price}</p>
            <p className="card-desc">{cardItem.description}</p>
            <button className="btn btn-primary button-minor" onClick={() => {addItemToCart({
                item: cardItem,
                count: 1
            })}}>
                Add to Cart
            </button>
        </div>
    );
}
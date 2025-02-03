import {IShopCard} from "../interfaces/interfaces.ts";

export default function ShopCard({cardItem, onAddToCart}
                                 : {cardItem: IShopCard, onAddToCart: (item: IShopCard) => void}) {
    return (
        <div className="card">
            <img src={cardItem.image} alt="Test image"/>
            <h5 className="card-title">{cardItem.title}</h5>
            <p className="card-price">{cardItem.price}</p>
            <p className="card-desc">{cardItem.description}</p>
            <button className="btn btn-primary button-minor" onClick={() => {onAddToCart(cardItem)}}>
                Add to Cart
            </button>
        </div>
    );
}
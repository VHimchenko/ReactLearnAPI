import './shop.css'

export default function ShopRoot(){

    const cartItemsCount = 0;

    return(
        <div id="shop">
            <h1> <img alt="Elegant content" src="https://i.pinimg.com/originals/18/2e/65/182e654e1ac146f0196f9adb5ad24742.jpg"/>
                Elegant context
                <button className="cart-button">Cart ({cartItemsCount})</button>
            </h1>

        </div>
    )
}
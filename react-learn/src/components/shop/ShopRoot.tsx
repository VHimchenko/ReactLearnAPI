import './shop.css'
import ShopCard from "./components/ShopCard.tsx";
import {IShopCard} from "./interfaces/interfaces.ts";
import Header from "./components/Header.tsx";
import CartContextProvider from "./store/shopping-cart-context.tsx";
import {DUMMY_PRODUCTS} from "../../services/data.tsx";

export default function ShopRoot(){
    const productItems: IShopCard[] = DUMMY_PRODUCTS;

    return (
        <CartContextProvider>
            <Header />
            <div className="cards-container">
                {productItems.map(item => {
                    return <ShopCard key={item.title} cardItem={item} />;
                })}
            </div>
        </CartContextProvider>
    );

    // return(
    //     <CartContext.Provider value={ctxValue}>
    //     <div id="shop">
    //         <Header />
    //         <div className="cards-container">
    //             {productItems.map(item => {
    //                 return <ShopCard key={item.title} cardItem={item} />;
    //             })}
    //         </div>
    //     </div>
    //     </CartContext.Provider>
    // )
}
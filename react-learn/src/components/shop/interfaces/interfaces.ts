export interface IShopCard {
    id: number;
    image: string;
    title: string;
    info: string;
    description: string;
    price: number;
}

export interface ICartItem {
    item: IShopCard
    count: number;
}
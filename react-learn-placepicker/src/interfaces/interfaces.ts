export interface IImage{
    src: string;
    alt: string;
}

export interface IPlace {
    id: string;
    title: string;
    image: IImage;
    lat: number;
    lon: number;
}

export interface IGeolocationPosition {
    coords: {
        latitude: number;
        longitude: number;
    };
}
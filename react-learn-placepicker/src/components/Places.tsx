import {IPlace} from "../interfaces/interfaces.ts";

export default function Places({title, places, fallbackText = '', onSelectPlace}
                               :{title: string, places: IPlace[], fallbackText: string, onSelectPlace: (id: string) => void} ) {
    return (
        <section className="places-category">
            <h2>{title}</h2>
            {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
            {places.length > 0 && (
                <ul className="places">
                    {places.map((place) => {
                        console.log(place.image.src);
                        return (
                        <li key={place.id} className="place-item">
                            <button onClick={() => {onSelectPlace(place.id)}}>
                                <img src={place.image.src} alt={place.image.alt} />
                                <h3>{place.title}</h3>
                            </button>
                        </li>
                    )})}
                </ul>
            )}
        </section>
    );
}
import {useEffect, useRef, useState} from 'react'
import DeleteConfirmation from "./components/DeleteConfirmation.tsx";
import './App.css'
import {AVAILABLE_PLACES} from "./data/data.ts";
import Modal from "./components/Modal.tsx";
import Places from "./components/Places.tsx";
import {IGeolocationPosition, IPlace} from "./interfaces/interfaces.ts";
import logoImg from "../src/assets/logo.png";
import {sortPlacesByDistance} from "./data/geo.ts";

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]');
const storedPlaces = storedIds.map((id: string) =>
    AVAILABLE_PLACES.find((place) => place.id === id));

function App() {
    //const modal = useRef<HTMLDialogElement | null>(null);
    const selectedPlace = useRef<string>();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [availablePlaces, setAvailablePlaces ] = useState<IPlace[]>([]);
    const [pickedPlaces, setPickedPlaces] = useState<IPlace[]>(storedPlaces);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position: IGeolocationPosition) => {
            const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES,
                position.coords.latitude,
                position.coords.longitude);

            setAvailablePlaces(sortedPlaces);
        });
    }, []);

    function handleStartRemovePlace(id: string) {
        setModalIsOpen(true);
        //modal.current!.showModal();
        selectedPlace.current = id;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
        //modal.current!.close();
    }

    function handleSelectPlace(id: string) {
        setPickedPlaces((prevPickedPlaces: IPlace[]) => {
            if (prevPickedPlaces.some((place) => place.id === id)) {
                return prevPickedPlaces;
            }
            const place = AVAILABLE_PLACES
                .find((place) => place.id === id);
            if (!place)
                return prevPickedPlaces;
            return [place, ...prevPickedPlaces];
        });

        const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]');
        if (storedIds.indexOf(id) === -1) {
            localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
        }
    }

    function handleRemovePlace() {
        setPickedPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
        );
        setModalIsOpen(false);
        //modal.current!.close();

        const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]');
        localStorage.setItem('selectedPlaces',
            JSON.stringify(storedIds.filter((id: string) => id !== selectedPlace.current)));
    }

    return (
        <>
            <Modal open={modalIsOpen}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe" />
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to visit or
                    you have visited.
                </p>
            </header>
            <main>
                <Places
                    title="I'd like to visit ..."
                    fallbackText={"Select the places you would like to visit below."}
                    places={pickedPlaces}
                    onSelectPlace={handleStartRemovePlace}
                />
                <Places
                    title="Available Places"
                    fallbackText="Sorting places by distance from current."
                    //places={AVAILABLE_PLACES}
                    places={availablePlaces}
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
}

export default App

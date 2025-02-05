import {useRef, useState} from 'react'
import DeleteConfirmation from "./components/DeleteConfirmation.tsx";
import './App.css'
import {AVAILABLE_PLACES} from "./data/data.ts";
import Modal from "./components/Modal.tsx";
import Places from "./components/Places.tsx";
import {IPlace} from "./interfaces/interfaces.ts";
import logoImg from "assets/logo.png";

function App() {
    const modal = useRef<HTMLDialogElement | null>(null);
    const selectedPlace = useRef<string>();
    const [pickedPlaces, setPickedPlaces] = useState<IPlace[]>([]);

    function handleStartRemovePlace(id: string) {
        modal.current!.showModal();
        selectedPlace.current = id;
    }

    function handleStopRemovePlace() {
        modal.current!.close();
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
    }

    function handleRemovePlace() {
        setPickedPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
        );
        modal.current!.close();
    }

    return (
        <>
            <Modal ref={modal}>
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
                    places={AVAILABLE_PLACES}
                    fallbackText=''
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
}

export default App

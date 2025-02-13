import Places from './Places.jsx';
import {useEffect, useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem('places');
    if (!storage) {
      (async function fetchData() {
        const resp = await fetch('http://localhost:3000/places');
        const data = await resp.json();
        localStorage.setItem('places', JSON.stringify(data.places));
        setAvailablePlaces(data.places);
      })();
    } else {
      setAvailablePlaces(JSON.parse(storage));
    }
  },[]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/places')
  //       .then(o=> o.json())
  //       .then(respData  => setAvailablePlaces(respData.places));
  // },[]);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

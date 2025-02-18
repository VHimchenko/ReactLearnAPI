import Places from './Places.jsx';
import {useEffect, useState} from "react";
import {sortPlacesByDistance} from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const storage = localStorage.getItem('places');
    if (!storage) {
      (async function fetchData() {
        try {
          const resp = await fetch('http://localhost:3000/places');
          if (!resp.ok)
            throw new Error('Failed to fetch data.');

          const data = await resp.json();
          navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(data.places,
              position.coords.latitude,
              position.coords.longitude);
            localStorage.setItem('places', JSON.stringify(sortedPlaces));
            setAvailablePlaces(sortedPlaces);
          });
        } catch (error) {
          setError({message: error.message});
        }
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

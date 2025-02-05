import {useRef, useState} from 'react'
import './App.css'

function App() {
  const modal = useRef<HTMLDialogElement>();
  const selectedPlace = useRef();
  const [picketPlaces, setPickedPlaces] = useState([]);

  function handleStartRemovePlace(id) {
      modal.current!.showModal();
      selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
      modal.current!.close();
  }




  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App

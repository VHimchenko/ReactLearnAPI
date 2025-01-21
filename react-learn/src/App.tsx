//import { useState } from 'react'
import './App.css'
import Header from "./components/Header.tsx";
import CoreConcept from "./components/CoreConcept.tsx";
import {CORE_CONCEPTS} from "./services/data.tsx";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul className="horizontal-list">
              <CoreConcept
                  title={CORE_CONCEPTS[0].title}
                  description={CORE_CONCEPTS[0].description}
                  image={CORE_CONCEPTS[0].image} />
              <CoreConcept {...CORE_CONCEPTS[1]}/>
              <CoreConcept {...CORE_CONCEPTS[2]}/>
              <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
      </section>
    </>
  )
}

export default App

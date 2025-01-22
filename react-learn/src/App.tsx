import { useState } from 'react';
import './App.css';
import Header from "./components/Header.tsx";
import CoreConcept from "./components/CoreConcept.tsx";
import {CORE_CONCEPTS, EXAMPLES} from "./services/data.tsx";
import TabButton from "./components/TabButton.tsx";
import TabContent from "./components/TabContent.tsx";


function App() {
    const [ selectedTopic, setSelectedTopic ] = useState({title: '', description: '', code: ``});

    function handleSelect(selectedButton: string) {
        const selectedContent = EXAMPLES.find(example => example.title === selectedButton);
        setSelectedTopic(selectedContent!);
        console.log(selectedButton);
    }

    return (
        <>
            <Header></Header>
            <section id="core-concepts">
                <h2>Time to get started!</h2>
                <ul className="horizontal-list">
                    <CoreConcept
                        title={CORE_CONCEPTS[0].title}
                        description={CORE_CONCEPTS[0].description}
                        image={CORE_CONCEPTS[0].image}/>
                    <CoreConcept {...CORE_CONCEPTS[1]}/>
                    <CoreConcept {...CORE_CONCEPTS[2]}/>
                    <CoreConcept {...CORE_CONCEPTS[3]}/>
                </ul>
            </section>
            <section id="examples">
                <menu className="horizontal-list">
                    <TabButton onSelect={() => handleSelect('Components')}>{CORE_CONCEPTS[0].title}</TabButton>
                    <TabButton onSelect={() => handleSelect('JSX')}>{CORE_CONCEPTS[1].title}</TabButton>
                    <TabButton onSelect={() => handleSelect('Props')}>{CORE_CONCEPTS[2].title}</TabButton>
                    <TabButton onSelect={() => handleSelect('State')}>{CORE_CONCEPTS[3].title}</TabButton>
                </menu>
                <div className="tab-content">
                    <TabContent {...selectedTopic} />
                </div>
            </section>
        </>
    )
}

export default App

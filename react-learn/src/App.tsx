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
                    { CORE_CONCEPTS.map(concept =>
                        (<CoreConcept key={ concept.title } {...concept}/>)) }
                </ul>
            </section>
            <section id="examples">
                <menu className="horizontal-list">
                    { CORE_CONCEPTS.map(concept =>
                        (<TabButton key={concept.title}
                                    isSelected={ selectedTopic.title === concept.title }
                                    onSelect={() => handleSelect(concept.title)}>{concept.title}
                        </TabButton>))
                    }
                </menu>
                <div className="tab-content">
                    <TabContent {...selectedTopic} />
                </div>
            </section>
        </>
    )
}

export default App

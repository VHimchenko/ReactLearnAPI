import {CORE_CONCEPTS, EXAMPLES} from "../services/data.tsx";
import TabButton from "./TabButton.tsx";
import TabContent from "./TabContent.tsx";
import {useState} from "react";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState({title: '', description: '', code: ``});

    function handleSelect(selectedButton: string) {
        const selectedContent = EXAMPLES.find(example => example.title === selectedButton);
        setSelectedTopic(selectedContent!);
        console.log(selectedButton);
    }

    return (
        <section id="examples">
            <menu className="horizontal-list">
                { CORE_CONCEPTS.map(concept =>
                    (<TabButton key={ `${concept.title}-examples` }
                                isSelected={ selectedTopic.title === concept.title }
                                onSelect={() => handleSelect(concept.title)}>{concept.title}
                    </TabButton>))
                }
            </menu>
            <div className="tab-content">
                <TabContent {...selectedTopic} />
            </div>
        </section>
    );
}
import {CORE_CONCEPTS, EXAMPLES} from "../services/data.tsx";
import TabButton from "./TabButton.tsx";
import TabContent from "./TabContent.tsx";
import {useState} from "react";
import Section from "./Section.tsx";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState({title: '', description: '', code: ``});

    function handleSelect(selectedButton: string) {
        const selectedContent = EXAMPLES.find(example => example.title === selectedButton);
        setSelectedTopic(selectedContent!);
        console.log(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
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
        </Section>
    );
}
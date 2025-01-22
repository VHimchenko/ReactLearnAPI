import {CORE_CONCEPTS, EXAMPLES} from "../services/data.tsx";
import TabButton from "./TabButton.tsx";
import TabContent from "./TabContent.tsx";
import {useState} from "react";
import Section from "./Section.tsx";
import Tabs from "./Tabs.tsx";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState({title: '', description: '', code: ``});

    function handleSelect(selectedButton: string) {
        const selectedContent = EXAMPLES.find(example => example.title === selectedButton);
        setSelectedTopic(selectedContent!);
        console.log(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttonsContainer="menu" menuItems={
                CORE_CONCEPTS.map(concept =>
                        (<TabButton key={ `${concept.title}-examples` }
                                    isSelected={ selectedTopic.title === concept.title }
                                    onSelect={() => handleSelect(concept.title)}>{concept.title}
                        </TabButton>))
            }>
                <TabContent {...selectedTopic}/>
            </Tabs>
        </Section>
    );
}
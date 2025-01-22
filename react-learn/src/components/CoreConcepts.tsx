import {CORE_CONCEPTS} from "../services/data.tsx";
import CoreConcept from "./CoreConcept.tsx";
import Section from "./Section.tsx";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Time to get started!">
            <ul className="horizontal-list">
                { CORE_CONCEPTS.map(concept =>
                    (<CoreConcept key={ `${concept.title}-core-concepts` } {...concept}/>)) }
            </ul>
        </Section>
    );
}
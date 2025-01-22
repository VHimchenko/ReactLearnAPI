import {CORE_CONCEPTS} from "../services/data.tsx";
import CoreConcept from "./CoreConcept.tsx";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul className="horizontal-list">
                { CORE_CONCEPTS.map(concept =>
                    (<CoreConcept key={ `${concept.title}-core-concepts` } {...concept}/>)) }
            </ul>
        </section>
    );
}
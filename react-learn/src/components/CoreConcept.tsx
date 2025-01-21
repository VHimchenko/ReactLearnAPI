export interface ICoreConceptProps {
    title: string;
    description: string;
    image: string;
}

function CoreConcept(props: ICoreConceptProps) {
    return (
        <li>
            <img src={props.image} alt={props.title} style={{maxWidth: '100%', maxHeight: '100px', width: 'auto', height: 'auto'}} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

export default CoreConcept;
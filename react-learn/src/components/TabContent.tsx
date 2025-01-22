export interface ITabContentProps {
    title: string;
    description: string;
    code: string;
}

export default function TabContent(props: ITabContentProps) {
    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <pre>
                <code>
                    {props.code}
                </code>
            </pre>
        </>);
}
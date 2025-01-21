import {MouseEventHandler, PropsWithChildren} from "react";

export interface ITabButtonProps extends PropsWithChildren{
    onSelect: MouseEventHandler<HTMLButtonElement>;
}

export default function TabButton(props: ITabButtonProps) {
    return (
        <li>
            <button onClick={props.onSelect}>
                {props.children}
            </button>
        </li>
    );
}
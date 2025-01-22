import {MouseEventHandler, PropsWithChildren} from "react";

export interface ITabButtonProps extends PropsWithChildren{
    onSelect: MouseEventHandler<HTMLButtonElement>;
    isSelected: boolean;
}

export default function TabButton(props: ITabButtonProps) {
    return (
        <li>
            <button className={ props.isSelected ? "active" : "" } onClick={props.onSelect}>
                {props.children}
            </button>
        </li>
    );
}
import {PropsWithChildren} from "react";
import * as React from "react";

export interface ITabs extends PropsWithChildren {
    menuItems: React.ReactElement[];
    buttonsContainer: React.ElementType;
}

export default function Tabs({...props}: ITabs & {}) {
    const ButtonsContainer = props.buttonsContainer;
    return (
        <>
            <ButtonsContainer className="horizontal-list">
                {...props.menuItems}
            </ButtonsContainer>
            {props.children}
        </>
    );
}
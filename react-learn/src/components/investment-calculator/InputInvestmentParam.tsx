import {PropsWithChildren} from "react";
import {IInvestmentsInputData} from "./interfaces/interfaces.ts";

export interface IInputInvestmentParam extends PropsWithChildren {
    title: string;
    id: string;
    defaultValue?: number;
    step?: number;
    visibleData: IInvestmentsInputData;
    //onChangeInput(id: string, event: ChangeEvent<HTMLInputElement>): void;
    onChangeInput(id: string, newValue: number): void;
}

export default function InputInvestmentParam (props: IInputInvestmentParam) {
    return (
        <>
            <label htmlFor={props.title}>{props.title}</label>
            <input type="number"
                   defaultValue={props.defaultValue} id={props.id}
                   step={props.step}
                   value={props.visibleData.initialInvestment}
                   onChange={(event) =>
                       props.onChangeInput(props.id, Number(event.target.value))}
                   required
            />
        </>
    );
}
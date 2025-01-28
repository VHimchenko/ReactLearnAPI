import {PropsWithChildren} from "react";
import {IInvestmentsInputData} from "./interfaces/interfaces.ts";

export interface IGreenDesk extends PropsWithChildren {
    className?: string;
    visibleData: IInvestmentsInputData;
    onChangeInput: (controlId: string, newValue: number) => void;
}

export default function GreenDesk(props: IGreenDesk ) {
    return (
        <div className={ props.className }>
            <div className="green-desk-row">
                <div className="green-desk-col">
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input type="number"
                           defaultValue="0" id="initialInvestment"
                           placeholder="Enter your initial investment"
                           step="500"
                           value={props.visibleData.initialInvestment}
                           onChange={(event) =>
                               props.onChangeInput('initialInvestment', Number(event.target.value))}
                           required
                    />
                </div>
                <div className="green-desk-col">
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input type="number" defaultValue="0" id="annualInvestment"
                           placeholder="Enter your Annual investment"
                           step="100"
                           value={props.visibleData.annualInvestment}
                           onChange={(event) =>
                               props.onChangeInput('annualInvestment', Number(event.target.value))}
                           required
                    />
                </div>
            </div>
            <div className="green-desk-row">
                <div className="green-desk-col">
                    <label htmlFor="expectedReturn">Expected return</label>
                    <input type="number" step="0.5" defaultValue="3" id="expectedReturn"
                           placeholder="Enter your expected return"
                           value={props.visibleData.expectedReturn}
                           onChange={(event) =>
                               props.onChangeInput('expectedReturn', Number(event.target.value))}
                           required
                    />
                </div>
                <div className="green-desk-col">
                    <label htmlFor="duration">Duration</label>
                    <input type="number" step="1" defaultValue="12" id="duration"
                           placeholder="Enter your duration"
                           value={props.visibleData.duration}
                           onChange={(event) =>
                               props.onChangeInput('duration', Number(event.target.value))}
                           required
                    />
                </div>
            </div>
        </div>
    );
}
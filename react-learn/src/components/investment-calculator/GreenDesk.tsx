import {PropsWithChildren} from "react";
import {IInvestmentsInput} from "./interfaces/interfaces.ts";

export interface IGreenDesk extends PropsWithChildren {
    className?: string;
}

export default function GreenDesk(props: IInvestmentsInput ) {
    return (
        <div className={ props.className }>
            <div className="green-desk-row">
                <div className="green-desk-col">
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number"
                           defaultValue="0" id="initial-investment"
                           placeholder="Enter your initial investment"
                           value={props.initial}
                    />
                </div>
                <div className="green-desk-col">
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" defaultValue="0" id="annual-investment"
                           placeholder="Enter your Annual investment"
                           value={props.annualInvestment}
                    />
                </div>
            </div>
            <div className="green-desk-row">
                <div className="green-desk-col">
                    <label htmlFor="expected-return">Expected return</label>
                    <input type="number" step="0.5" defaultValue="3" id="expected-return"
                           placeholder="Enter your expected return"
                           value={props.expectedReturn}
                    />
                </div>
                <div className="green-desk-col">
                    <label htmlFor="duration">Duration</label>
                    <input type="number" step="1" defaultValue="12" id="duration"
                           placeholder="Enter your duration"
                           value={props.duration}
                    />
                </div>
            </div>
        </div>
    );
}
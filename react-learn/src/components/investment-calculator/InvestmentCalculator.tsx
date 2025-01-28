import GreenDesk from './GreenDesk.tsx';
import OutputResults from './OutputResults.tsx';
import {IInvestmentsInputData} from "./interfaces/interfaces.ts";
import {useState} from "react";

const data: IInvestmentsInputData = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
};

export default function InvestmentCalculator() {
    const [userInput, setUserInput] = useState({
        initialInvestment: data.initialInvestment,
        annualInvestment: data.annualInvestment,
        expectedReturn: data.expectedReturn,
        duration: data.duration,
    });

    function handleChange(inputIdentifier: string, newValue: number) {
        setUserInput(prevUserInput => {
            return ({
                ...prevUserInput,
                [inputIdentifier]: +newValue
            })
        });
    }

    return (<div className="investment-calculator">
        <GreenDesk className="green-desk" visibleData={userInput} onChangeInput={handleChange}/>
        <OutputResults userInput={userInput}/>
    </div>)
}
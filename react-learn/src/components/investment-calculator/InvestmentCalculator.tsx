import GreenDesk from './GreenDesk.tsx';
import OutputResults from './OutputResults.tsx';
import {IInvestmentCalculatorProps, IInvestmentsInput} from "./interfaces/interfaces.ts";
import {useState} from "react";

const data: IInvestmentCalculatorProps = {
    parameters: {
        initial: 15000,
        annualInvestment: 900,
        expectedReturn: 5.5,
        duration: 12
    },
    results: {
        items: []
    }
};

export default function InvestmentCalculator() {
    const [investmentsData, setInvestmentData] = useState(data);



    return (<div className="investment-calculator">
        <GreenDesk className="green-desk" {...investmentsData.parameters} />
        <OutputResults {...investmentsData.results}/>
    </div>)
}
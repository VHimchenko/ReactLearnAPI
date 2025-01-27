import {PropsWithChildren} from "react";

export interface IInvestmentCalculatorProps {
    parameters: IInvestmentsInput;
    results: IInvestmentsOutput;
}

export interface IInvestmentsInput extends PropsWithChildren{
    className?: string;
    initial: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export interface IInvestmentsOutput {
    items: IInvestmentsOutputItem[];
}

export interface IInvestmentsOutputItem {
    year: number;
    investmentValue: number;
    interestPerYear: number;
    totalInterest: number;
    investedCapital: number;
}
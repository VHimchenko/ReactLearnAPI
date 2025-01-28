import {PropsWithChildren} from "react";

export interface IInvestmentCalculatorProps {
    parameters: IInvestmentsInput;
    results: IInvestmentsOutput;
}

export interface IInvestmentsInputData {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export interface IInvestmentsInput extends PropsWithChildren, IInvestmentsInputData{
    className?: string;
}

export interface IInvestmentsOutput {
    userInput: IInvestmentsInputData;
}

export interface IInvestmentsOutputItem {
    year: number;
    investmentValue: number;
    interestPerYear: number;
    totalInterest: number;
    investedCapital: number;
}
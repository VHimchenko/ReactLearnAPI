import {IInvestmentsInputData, IInvestmentsOutputItem} from "../interfaces/interfaces.ts";

export class InvestmentsCalculator {
    static calculateInvestmentResults(inputParams: IInvestmentsInputData): IInvestmentsOutputItem[] {
        const annualData = [];
        let investmentValue = inputParams.initialInvestment;

        for (let i = 0; i < inputParams.duration; i++) {
            const interestEarnedInYear = investmentValue * inputParams.expectedReturn;
            investmentValue += interestEarnedInYear + inputParams.annualInvestment;
            annualData.push({
                year: i + 1,
                investmentValue: investmentValue,
                interestPerYear: interestEarnedInYear,
                totalInterest: investmentValue,
                investedCapital: inputParams.annualInvestment
            })
        }
        return annualData;
    }
}
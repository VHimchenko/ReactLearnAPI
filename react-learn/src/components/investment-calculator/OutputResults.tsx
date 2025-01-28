import {IInvestmentsOutput, IInvestmentsOutputItem} from "./interfaces/interfaces.ts";
import {InvestmentsCalculator} from "./utils/InvestmentsCalculator.ts";

export default function OutputResults(props: IInvestmentsOutput) {

    const results = InvestmentsCalculator
        .calculateInvestmentResults(props.userInput);

    return (
        <table className="output-results-table">
            <thead>
            <tr>
                <th scope="col">Year</th>
                <th scope="col">Investment value</th>
                <th scope="col">Interest (Year)</th>
                <th scope="col">Total interest</th>
                <th scope="col">Invested capital</th>
            </tr>
            </thead>
            <tbody>
            {results.length > 0 && results.map((item: IInvestmentsOutputItem) => {
                return (
                    <tr key={item.year}>
                        <th scope="row">{item.year}</th>
                        <td>{item.investmentValue}</td>
                        <td>{item.interestPerYear}</td>
                        <td>{item.totalInterest}</td>
                        <td>{item.investedCapital}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}
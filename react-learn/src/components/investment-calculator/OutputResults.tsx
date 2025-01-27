import {IInvestmentsOutput, IInvestmentsOutputItem} from "./interfaces/interfaces.ts";

export default function OutputResults(props: IInvestmentsOutput) {
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
            {props.items.length > 0 && props.items.map((item: IInvestmentsOutputItem) => {
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
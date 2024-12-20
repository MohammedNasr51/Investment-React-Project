import { calculateInvestmentResults, formatter } from '../util/investment.js'
export default function Results({ input }) {
    const results = calculateInvestmentResults(input);
    if (results.length === 0) {
        return <p className="center">Input is not valid</p>;
    }
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInterestRate;
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => {
                    const totalInterest = result.valueEndOfYear - result.annualInterestRate * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>)
                })}
            </tbody>
        </table>
    )
}

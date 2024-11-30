export default function UserInput({ onChange, userInput}) {


    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label htmlFor="investment">Initial Investment</label>
                    <input
                        type="number" id="investment"
                        value={userInput.initialInvestment}
                        required onChange={(e) => onChange('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="rate">Annual Interest Rate (%)</label>
                    <input type="number" 
                    id="rate" 
                    required 
                    value={userInput.annualInterestRate}
                    onChange={(e) => onChange('annualInterestRate', e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="return">Expected return</label>
                    <input type="number" 
                    id="return" 
                    required 
                    value={userInput.expectedReturn}
                    onChange={(e) => onChange('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Dutation</label>
                    <input type="number" 
                    id="duration" 
                    required 
                    value={userInput.duration}
                    onChange={(e) => onChange('duration', e.target.value)} />
                </p>
            </div>

        </section>

    )
}

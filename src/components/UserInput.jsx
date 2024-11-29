import { useState } from "react"
export default function UserInput() {
    const [playerInput, setPlayerInput] = useState({
        initialInvestment: 0,
        annualInterestRate: 0,
        expectedReturn: 0,
        duration: 0

    });
    const handleUserInput = (identefire, newUserInput) => {
        setPlayerInput((prevState) => {
            return {
                ...prevState,
                [identefire]: newUserInput
            }
        })
    }

    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label htmlFor="investment">Initial Investment</label>
                    <input
                        type="number" id="investment"
                        value={playerInput.initialInvestment}
                        required onChange={(e) => handleUserInput('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="rate">Annual Interest Rate (%)</label>
                    <input type="number" 
                    id="rate" 
                    required 
                    value={playerInput.annualInterestRate}
                    onChange={(e) => handleUserInput('annualInterestRate', e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="return">Expected return</label>
                    <input type="number" 
                    id="return" 
                    required 
                    value={playerInput.expectedReturn}
                    onChange={(e) => handleUserInput('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Dutation</label>
                    <input type="number" 
                    id="duration" 
                    required 
                    value={playerInput.duration}
                    onChange={(e) => handleUserInput('duration', e.target.value)} />
                </p>
            </div>

        </section>

    )
}

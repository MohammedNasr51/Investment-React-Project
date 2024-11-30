import { useState } from "react"
import Results from "./components/Results";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInterestRate: 1200,
    expectedReturn: 6,
    duration: 10

  });
  const handleUserInput = (identefire, newUserInput) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [identefire]: +newUserInput // +newUserInput converts the string to a number
      }
    })
  }
  const isValidInput = userInput.duration >= 1;
  return (
    <>
      <UserInput onChange={handleUserInput} userInput={userInput} />
      {isValidInput ? <Results input={userInput} /> : <p className="center">Please enter duration greater than zero.</p>}
    </>
  )
}

export default App

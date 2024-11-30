import { useState } from "react"
import Results from "./components/Results";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInterestRate: 0,
    expectedReturn: 0,
    duration: 0

  });
  const handleUserInput = (identefire, newUserInput) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [identefire]: newUserInput
      }
    })
  }
  return (
    <>
      <UserInput onChange={handleUserInput} userInput={userInput} />
      <Results input={userInput} />
    </>
  )
}

export default App

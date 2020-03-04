import React, { useContext, useCallback, ReactElement } from "react"
import { AppContext } from "../context/AppContext"
import Slider from "./Slider"
import ValueCaption from "./ValueCaption"

const Chart = (): ReactElement => {
  const { loanAmount, setLoanAmount, loanTerm, setLoanTerm } = useContext(
    AppContext
  )
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoanAmount(Number(e.target.value))

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoanTerm(Number(e.target.value))

  const getMonthlyPayment = useCallback(() => {
    // dumb monthly payment calculations
    return Math.round(loanAmount / loanTerm + (loanAmount / loanTerm) * 0.3)
  }, [loanTerm, loanAmount])

  return (
    <div className="chart" data-testid="chart">
      <div className="headerText">
        <h3 className="headerText_1">How much money do you need?</h3>
        <h2 className="headerText_2">Calculate your loan</h2>
      </div>
      <div className="slider_wrapper">
        <Slider
          minValue={100}
          maxValue={10000}
          currentValue={loanAmount}
          onChange={handleAmountChange}
          selector="loan_input"
        />
      </div>
      <div className="slider_wrapper">
        <Slider
          minValue={1}
          maxValue={48}
          currentValue={loanTerm}
          onChange={handleTermChange}
          selector="therm_input"
        />
      </div>
      <div className="summary">
        <ValueCaption
          caption="You are getting"
          value={loanAmount}
          postfix="EUR"
          testId="loan_value"
        />
        <ValueCaption
          caption="Terms of use"
          value={loanTerm}
          postfix={loanTerm > 1 ? "months" : "month"}
          testId="therm_value"
        />
        <ValueCaption
          caption="Monthly payment"
          value={getMonthlyPayment()}
          postfix="EUR"
        />
      </div>
      <button className="chart_btn">Apply</button>
    </div>
  )
}

export default Chart

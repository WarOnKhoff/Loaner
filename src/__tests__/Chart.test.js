import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Chart from "../components/Chart"
import "@testing-library/jest-dom/extend-expect"
import { AppContextProvider } from "../context/AppContext"
const setup = () => {
  const { getByTestId, container } = render(<Chart />)
  return {
    getByTestId,
    container
  }
}

describe("Components: Chart", () => {
  test("Renders correctly", () => {
    const { container } = render(<Chart />)
    expect(container).toMatchSnapshot()
  })
  test("Should keep 5 children nodes", () => {
    expect(setup().getByTestId("chart").childElementCount).toBe(5)
  })
  test("Should change value of ValueCaption on Slider component onChange event", () => {
    const { container, getByTestId } = render(
      <AppContextProvider>
        <Chart />
      </AppContextProvider>
    )
    const loanInput = getByTestId("loan_input")
    const loanValue = getByTestId("loan_value")

    const thermInput = getByTestId("therm_input")
    const thermValue = getByTestId("therm_value")

    // Loan amount input/value couple
    fireEvent.change(loanInput, { target: { value: 5 } })
    expect(loanValue.innerHTML).toBe("5")
    // Loan therm input/value couple
    fireEvent.change(thermInput, { target: { value: 10 } })
    expect(thermValue.innerHTML).toBe("10")
  })
})

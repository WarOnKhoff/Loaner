import React, { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

interface ContextProps {
  loanAmount: number
  setLoanAmount(value: number): void
  loanTerm: number
  setLoanTerm(value: number): void
  page: string
  setPage(value: string): void
}

export const AppContext = React.createContext<ContextProps>({
  loanAmount: 100,
  setLoanAmount: () => {},
  loanTerm: 1,
  setLoanTerm: () => {},
  page: "Home",
  setPage: () => {}
})

export const AppContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [loanAmount, setLoanAmount] = useLocalStorage("loan", 100)
  const [loanTerm, setLoanTerm] = useLocalStorage("term", 1)
  const [page, setPage] = useState<string>(
    window.location.pathname.substring(1)
  )
  const value = {
    loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    page,
    setPage
  }
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

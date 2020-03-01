import React, { useState } from 'react'
import { useLocalStorage, useLocalStorageTheme } from './useLocalStorage'

interface ContextProps {
	theme: string
	setTheme(value: string): void
	loanAmount: number
	setLoanAmount(value: number): void
	loanTerm: number
	setLoanTerm(value: number): void
}

const ContextWrapper = () => {
	const [theme, setTheme] = useLocalStorageTheme('theme')
	const [loanAmount, setLoanAmount] = useLocalStorage('loan', 100)
	const [loanTerm, setLoanTerm] = useLocalStorage('term', 1)
	const value = {
		theme,
		setTheme,
		loanAmount,
		setLoanAmount,
		loanTerm,
		setLoanTerm,
	}
	const AppContext = React.createContext<ContextProps>(value)
	const AppContextProvider = (props: React.PropsWithChildren<{}>) => (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	)
	return { AppContext, AppContextProvider }
}
export default ContextWrapper

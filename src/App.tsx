import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { AppContextProvider } from './context/AppContext'
import { ThemeContextProvider } from './context/ThemeContext'

const App: React.FC = () => {
	return (
		<ThemeContextProvider>
			<AppContextProvider>
				<Header />
				<Footer />
			</AppContextProvider>
		</ThemeContextProvider>
	)
}

export default App

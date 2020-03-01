import React from 'react'
import Header from './components/Header'
import ContextWrapper from './context/AppContext'

const App: React.FC = () => {
	const { AppContextProvider } = ContextWrapper()
	return (
		<AppContextProvider>
			<Header />
		</AppContextProvider>
	)
}

export default App

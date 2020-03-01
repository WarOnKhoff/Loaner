import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import App from './App'
import { AppContextProvider } from './context/AppContext'
import { ThemeContextProvider } from './context/ThemeContext'

ReactDOM.render(
	<ThemeContextProvider>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</ThemeContextProvider>,
	document.getElementById('root'),
)

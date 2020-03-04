import React from "react"
import ReactDOM from "react-dom"
import "./scss/index.scss"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { AppContextProvider } from "./context/AppContext"
import { ThemeContextProvider } from "./context/ThemeContext"

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeContextProvider>
  </Router>,
  document.getElementById("root")
)

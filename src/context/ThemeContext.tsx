import React from "react"
import { useLocalStorageTheme } from "./useLocalStorage"

interface ContextProps {
  theme: string
  themeToggler(): void
}
export const ThemeContext = React.createContext<ContextProps>({
  theme: "dark",
  themeToggler: () => {}
})

export const ThemeContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useLocalStorageTheme("theme")
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  const value = {
    theme,
    themeToggler
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

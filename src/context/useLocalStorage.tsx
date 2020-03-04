import React, { useState, useEffect } from "react"

export function useLocalStorage(
  localStorageKey: string,
  defaultValue?: number
): [number, React.Dispatch<number>] {
  const [value, setValue] = useState<number>(
    Number(localStorage.getItem(localStorageKey)) || defaultValue || 0
  )
  useEffect(() => {
    localStorage.setItem(localStorageKey, value.toString())
  }, [value, localStorageKey])

  return [value, setValue]
}

export function useLocalStorageTheme(
  localStorageKey: string
): [string, React.Dispatch<string>] {
  const [value, setValue] = useState<string>(
    localStorage.getItem(localStorageKey) || "dark"
  )

  useEffect(() => {
    localStorage.setItem(localStorageKey, value.toString())
  }, [value, localStorageKey])
  return [value, setValue]
}

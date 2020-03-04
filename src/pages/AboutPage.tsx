import React, { useContext } from "react"
import Footer from "../components/Footer"
import Background from "../components/Background"
import { ThemeContext } from "../context/ThemeContext"
import Header from "../components/Header"
import cx from "clsx"
import { useCountUp } from "react-countup"

const Home = () => {
  const { theme } = useContext(ThemeContext)
  const main = cx({
    main: true,
    main_ligthTheme: theme === "light"
  })

  const { countUp, update } = useCountUp({
    start: 2506,
    end: 2506,
    delay: 300,
    duration: 3
  })

  const handleHover = (value: number) => {
    update(value)
  }
  return (
    <section className={main}>
      <Header />
      <div className="about">
        <div className="about_text">
          <b className="companyName">Loaner</b> is fast growing FinTech startup
          with the aim to provide European investors with exposure to the
          short-term unsecured consumer loans markets in Central and Eastern
          Europe.
        </div>
        <div className="about_metricks">
          <div className="about_metricks_capture">
            <div className="metric_value">{countUp}</div>
            <div>Of trusted customers</div>
          </div>
          <ul className="about_metricks_row">
            <li
              className="about_metricks_row_item year"
              onMouseEnter={() => handleHover(2506)}
            >
              2020
            </li>
            <li
              className="about_metricks_row_item"
              onMouseEnter={() => handleHover(1135)}
            >
              2019
            </li>
            <li
              className="about_metricks_row_item"
              onMouseEnter={() => handleHover(630)}
            >
              2018
            </li>
            <li
              className="about_metricks_row_item"
              onMouseEnter={() => handleHover(34)}
            >
              2017
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      <Background />
    </section>
  )
}

export default Home

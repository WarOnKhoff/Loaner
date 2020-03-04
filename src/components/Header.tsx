import React, { useContext } from "react"
import logo from "../assets/logo.png"
import clsx from "clsx"
import { AppContext } from "../context/AppContext"
import { ThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"

interface IMenuItem {
  value: string
  current: string
  clickHandler(value: string): void
  lightTheme: boolean
}

const MenuItem = ({ value, current, clickHandler, lightTheme }: IMenuItem) => {
  const link = clsx({
    linksGroup_item: true,
    linksGroup_item_lightTheme: lightTheme,
    current_page: value === current
  })
  const handleClick = () => {
    clickHandler(value)
  }
  return (
    <Link to={value.toLowerCase()} className={link} onClick={handleClick}>
      {value}
    </Link>
  )
}

const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const { page, setPage } = useContext(AppContext)
  const { theme, themeToggler } = useContext(ThemeContext)

  const lightTheme = theme === "light"

  const menuList = clsx({
    linksGroup: true,
    closed: !open,
    open: open,
    "menu-lightTheme": lightTheme
  })
  const navBar = clsx({
    navbar: true,
    "header-lightTheme": lightTheme
  })
  const menuBtn = clsx({
    menuBtn: true,
    large: true,
    "material-icons": true,
    highlightedBtn: open
  })

  return (
    <nav className={navBar}>
      <img src={logo} alt="Loaner logo" className="navbar_logo" />
      <span className="space" />
      <ul className={menuList}>
        <MenuItem
          value={"home"}
          current={page}
          clickHandler={setPage}
          lightTheme={lightTheme}
        />
        <MenuItem
          value={"about"}
          current={page}
          clickHandler={setPage}
          lightTheme={lightTheme}
        />
        <MenuItem
          value={"team"}
          current={page}
          clickHandler={setPage}
          lightTheme={lightTheme}
        />
        <MenuItem
          value={"contacts"}
          current={page}
          clickHandler={setPage}
          lightTheme={lightTheme}
        />
      </ul>
      <i className={menuBtn} onClick={() => setOpen(!open)}>
        dehaze
      </i>
      <i className="large material-icons togglerIcon">brightness_6</i>
      <input
        className="modeToggler"
        type="checkbox"
        checked={lightTheme}
        onChange={themeToggler}
      />
    </nav>
  )
}

export default Header

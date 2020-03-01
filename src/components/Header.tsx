import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import clsx from 'clsx'
import { AppContext } from '../context/AppContext'
import { ThemeContext } from '../context/ThemeContext'

interface IMenuItem {
	value: string
	current: string
	clickHandler(value: string): void
}

const MenuItem = ({ value, current, clickHandler }: IMenuItem) => {
	const link = clsx({
		linksGroup_item: true,
		current_page: value === current,
	})
	const handleClick = () => {
		clickHandler(value)
	}
	return (
		<li className={link} onClick={handleClick}>
			{value}
		</li>
	)
}

const Header = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const { page, setPage } = useContext(AppContext)
	const { theme, themeToggler } = useContext(ThemeContext)

	const menuList = clsx({
		linksGroup: true,
		closed: !open,
		open: open,
		'menu-lightTheme': theme === 'light',
	})
	const navBar = clsx({
		navbar: true,
		'header-lightTheme': theme === 'light',
	})
	const menuBtn = clsx({
		menuBtn: true,
		large: true,
		'material-icons': true,
		highlightedBtn: open,
	})

	return (
		<nav className={navBar}>
			<img src={logo} alt='Loaner logo' className='navbar_logo' />
			<span className='space' />
			<ul className={menuList}>
				<MenuItem
					value={'Getting Started'}
					current={page}
					clickHandler={setPage}
				/>
				<MenuItem value={'About'} current={page} clickHandler={setPage} />
				<MenuItem value={'Team'} current={page} clickHandler={setPage} />
				<MenuItem value={'Contacts'} current={page} clickHandler={setPage} />
			</ul>
			<i className={menuBtn} onClick={() => setOpen(!open)}>
				dehaze
			</i>
			<i className='large material-icons togglerIcon'>brightness_6</i>
			<input
				className='modeToggler'
				type='checkbox'
				checked={theme === 'light'}
				onChange={themeToggler}
			/>
		</nav>
	)
}

export default Header
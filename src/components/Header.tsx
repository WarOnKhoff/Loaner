import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import clsx from 'clsx'
import ContextWrapper from '../context/AppContext'

const Header: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const { theme, setTheme } = useContext(ContextWrapper().AppContext)
	const themeToggler = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark')
	}

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
				<li className='linksGroup_item current_page'>Getting Started</li>
				<li className='linksGroup_item'>About</li>
				<li className='linksGroup_item'>Team</li>
				<li className='linksGroup_item'>Contacts</li>
			</ul>
			<i className={menuBtn} onClick={() => setOpen(!open)}>
				dehaze
			</i>
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

import React from 'react'
import logo from '../assets/logo.png'
import clsx from 'clsx'

const Header: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const [lightTheme, setLightTheme] = React.useState<boolean>(false)
	const menuList = clsx({
		linksGroup: true,
		closed: !open,
		open: open,
		menuTheme: open && lightTheme,
	})
	const navBar = clsx({
		navbar: true,
		navTheme: lightTheme,
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
			<i className='large material-icons menu' onClick={() => setOpen(!open)}>
				dehaze
			</i>
			<input
				className='modeToggler'
				type='checkbox'
				onChange={() => setLightTheme(!lightTheme)}
			/>
		</nav>
	)
}

export default Header

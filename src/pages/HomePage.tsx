import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Background from '../components/Backgroud'
import { ThemeContext } from '../context/ThemeContext'
import Typed from 'react-typed'
import cx from 'clsx'

const Home = () => {
	const { theme } = useContext(ThemeContext)
	const main = cx({
		main: true,
		main_ligthTheme: theme === 'light',
	})
	return (
		<section className={main}>
			<div className='main_group'>
				<div className='main_group_left'>
					<h1 className='capture'>
						<div>Simple loans</div>
						<span>For Your </span>
						<Typed
							className='heroText'
							strings={['IDEAS', 'DREAMS', 'PLANS', 'NEEDS', 'HOBBY']}
							typeSpeed={100}
							backSpeed={100}
							backDelay={2000}
							loop
						/>
					</h1>
				</div>
				<div className='main_group_right'>RightSide</div>
			</div>
			<Footer />
			<Background />
		</section>
	)
}

export default Home

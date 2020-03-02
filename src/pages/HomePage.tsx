import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Chart from '../components/Chart'
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
						<span>for Your </span>
						<Typed
							className='heroText'
							strings={[' ideas', ' dreams', ' plans', ' needs', ' hobby']}
							typeSpeed={100}
							backSpeed={100}
							backDelay={2000}
							showCursor={false}
							autoInsertCss
							loop
						/>
					</h1>
					<ul className='steps'>
						<div className='steps_group'>
							<i className='large material-icons'>filter_1</i>
							<li className='steps_item'>Select amount and terms</li>
						</div>
						<div className='steps_group'>
							<i className='large material-icons'>filter_2</i>
							<li className='steps_item'>Enter your personal information</li>
						</div>
						<div className='steps_group'>
							<i className='large material-icons'>filter_3</i>
							<li className='steps_item'>Get your money in 2 hours</li>
						</div>
					</ul>
				</div>
				<div className='main_group_right'>
					<Chart />
				</div>
			</div>
			<Footer />
			<Background />
		</section>
	)
}

export default Home

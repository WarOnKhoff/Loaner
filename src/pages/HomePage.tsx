import React from 'react'
import Footer from '../components/Footer'
import Background from '../components/Backgroud'

const Home = () => {
	return (
		<section className='main'>
			<div className='main_group'>
				<div className='main_group_item'>LeftSide</div>
				<div className='main_group_item'>RightSide</div>
			</div>
			<Footer />
			<Background />
		</section>
	)
}

export default Home

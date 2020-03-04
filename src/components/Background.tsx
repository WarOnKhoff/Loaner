import React from 'react'

const Background = () => {
	const arr = new Array(10)
		.fill('')
		.map((_, i) => (
			<li
				key={`bg_item_${i}`}
				className={`background_item background_item_${i + 1}`}
			/>
		))
	return <ul className='background'>{arr}</ul>
}

export default Background

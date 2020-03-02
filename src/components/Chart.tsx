import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Chart = () => {
	const { loanAmount, setLoanAmount, loanTerm, setLoanTerm } = useContext(
		AppContext,
	)

	const getSliderBackground = (
		currentValue: number,
		maxValue: number,
	): string => {
		return `linear-gradient(90deg, #DA2C38 ${(currentValue / maxValue) *
			100}%, #747572 ${(currentValue / maxValue) * 100}%)`
	}
	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setLoanAmount(Number(e.target.value))
	const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setLoanTerm(Number(e.target.value))

	return (
		<div className='chart'>
			<div className='headerText'>
				<h3 className='headerText_1'>How much money do you need?</h3>
				<h2 className='headerText_2'>Calculate your loan</h2>
			</div>
			<div className='slider_wrapper'>
				<input
					type='range'
					min={1}
					max={10000}
					value={loanAmount}
					className='slider loan'
					onChange={handleAmountChange}
					style={{
						background: getSliderBackground(loanAmount, 10000),
					}}
				/>
			</div>
			<div className='slider_wrapper'>
				<input
					type='range'
					min={1}
					max={48}
					value={loanTerm}
					style={{
						background: getSliderBackground(loanTerm, 48),
					}}
					onChange={handleTermChange}
					className='slider therm'
				/>
			</div>
			<div className='summary'>
				<div className='summary_group'>
					<div className='summary_group_text'>You are getting:</div>
					<div className='summary_group_value'>{loanAmount} EUR</div>
				</div>
				<div className='summary_group'>
					<div className='summary_group_text'>Terms of use:</div>
					<div className='summary_group_value'>{loanTerm} months</div>
				</div>
				<div className='summary_group'>
					<div className='summary_group_text'>You must return:</div>
					<div className='summary_group_value'>7000 EUR</div>
				</div>
			</div>
			<button className='chart_btn'>Apply</button>
		</div>
	)
}

export default Chart

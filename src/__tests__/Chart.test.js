import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Chart from '../components/Chart'
import '@testing-library/jest-dom/extend-expect'

const setup = () => {
	const { getByTestId, container } = render(<Chart />)
	return {
		getByTestId,
		container,
	}
}

describe('Components: Chart', () => {
	test('Renders correctly', () => {
		const { container } = render(<Chart />)
		expect(container).toMatchSnapshot()
	})
	test('Should keep 5 children nodes', () => {
		expect(setup().getByTestId('chart').childElementCount).toBe(5)
	})
	test('Should rerender value of ValueCaption on Slider component onChange event', () => {
		//TODO try to create mocked Component with Slider and ValueCaption for testing purposes
	})
})

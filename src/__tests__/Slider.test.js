import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Slider from '../components/Slider'

const setup = props => {
	const { getByTestId, container } = render(<Slider {...props} />)
	return {
		container,
		getByTestId: getByTestId('slider'),
	}
}

const mocks = {
	minValue: 1,
	maxValue: 100,
	onChange: jest.fn(),
	currentValue: 5,
	selector: 'test-selector',
}

describe('Components: Slider', () => {
	test('Renders correctly', () => {
		const { container } = setup()
		expect(container).toMatchSnapshot()
	})
	test('Should be type of range input', () => {
		const { getByTestId } = setup()
		expect(getByTestId.getAttribute('type')).toBe('range')
	})
	test('Should receive minValue from props', () => {
		const { getByTestId } = setup(mocks)
		expect(getByTestId).toHaveAttribute('min')
		// mocks.minValue.toString() is used because of default input specificity
		// It keeps and provides string value
		expect(getByTestId.getAttribute('min')).toBe(mocks.minValue.toString())
	})
	test('Should receive maxValue from props', () => {
		const { getByTestId } = setup(mocks)
		expect(getByTestId).toHaveAttribute('max')
		expect(getByTestId.getAttribute('max')).toBe(mocks.maxValue.toString())
	})
	test('Should receive currentValue from props', () => {
		const { getByTestId } = setup(mocks)
		expect(getByTestId).toHaveAttribute('value')
		expect(getByTestId).toHaveValue(mocks.currentValue.toString())
	})
	test('Should keep proper className with selector from props', () => {
		const { getByTestId } = setup(mocks)
		expect(getByTestId.className).toBe(`slider ${mocks.selector}`)
	})
	test('Should fire onChange callback when is being changed', () => {
		const { getByTestId } = setup()
		getByTestId.onchange = mocks.onChange
		fireEvent.change(getByTestId)
		expect(mocks.onChange).toHaveBeenCalled()
	})
	test('Should update value on change', () => {
		const { getByTestId } = setup()
		getByTestId.onchange = mocks.onChange
		fireEvent.change(getByTestId, { target: { value: '777' } })
		expect(getByTestId).toHaveValue('777')
	})
})

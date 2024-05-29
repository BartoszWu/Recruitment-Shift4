import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MoneyInput } from './'
import { calculateCursorPosition } from './utils/utils.ts'

vi.mock('../../utils/format.ts', () => ({
    numberToCurrency: vi.fn((num: number) => `$${num.toFixed(2)}`),
}))

vi.mock('./utils/utils.ts', () => ({
    calculateCursorPosition: vi.fn(
        (currentPosition: number, oldValue: string, newValue: string) =>
            currentPosition + (newValue.length - oldValue.length)
    ),
    formatNumericValue: vi.fn((inputText: string) =>
        inputText.replace(/[^0-9.]/g, '')
    ),
    parseAndCleanNumericString: vi.fn(
        (input: string) => parseFloat(input.replace(/[^0-9.]/g, '')) || 0
    ),
}))

describe('MoneyInput', () => {
    it('should render with the correct initial value', () => {
        const { getByPlaceholderText } = render(
            <MoneyInput value="0.00" onChange={() => {}} />
        )
        const input = getByPlaceholderText('0.00') as HTMLInputElement
        expect(input.value).toBe('0.00')
    })

    it('should call onChange with the correct values when input changes', () => {
        const handleChange = vi.fn()
        const { getByPlaceholderText } = render(
            <MoneyInput value="0.00" onChange={handleChange} />
        )
        const input = getByPlaceholderText('0.00')

        fireEvent.change(input, { target: { value: '1234.56' } })
        expect(handleChange).toHaveBeenCalledWith('1234.56', 1234.56)
    })

    it('should format the value correctly on blur', () => {
        const handleChange = vi.fn()
        const { getByPlaceholderText } = render(
            <MoneyInput value="1234" onChange={handleChange} />
        )
        const input = getByPlaceholderText('0.00')

        fireEvent.blur(input)
        expect(handleChange).toHaveBeenCalledWith('1234.00', 1234)
    })

    it('should handle cursor position correctly', () => {
        const { getByPlaceholderText } = render(
            <MoneyInput value="1234" onChange={() => {}} />
        )
        const input = getByPlaceholderText('0.00')

        fireEvent.change(input, {
            target: { value: '12345', selectionStart: 5 },
        })
        expect(calculateCursorPosition).toHaveBeenCalledWith(
            5,
            '12345',
            '12345'
        )
    })

    it('should set cursor position on value change', () => {
        const { getByPlaceholderText } = render(
            <MoneyInput value="0.00" onChange={() => {}} />
        )
        const input = getByPlaceholderText('0.00') as HTMLInputElement

        const setSelectionRangeMock = vi.fn(() => {})
        input.setSelectionRange = setSelectionRangeMock

        fireEvent.change(input, {
            target: { value: '1234.56', selectionStart: 7 },
        })
        fireEvent.blur(input)

        expect(setSelectionRangeMock).toHaveBeenCalled()
    })
})

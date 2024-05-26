import { Input } from '../input'
import React, { useEffect } from 'react'
import DollarIcon from '../../icons/dollar.svg?react'
import { numberToCurrency } from '../../utils/format.ts'

type Props = {
    label?: string
    value: string
    onChange: (formattedValue: string, value: number) => void
}

// Removes all non-numeric characters except for the decimal point and parses the result to a float.
const parseNumericString = (input: string) => {
    const number = parseFloat(input.replace(/[^0-9.]/g, ''))
    if (!isNaN(number)) {
        return number
    }

    return 0
}

const formatValue = (inputText: string): string => {
    let formattedValue: string | number = inputText

    // Do not allow to input starts with `.`
    if (formattedValue.startsWith('.')) {
        return formattedValue.substring(1)
    }

    if (formattedValue.endsWith('.')) {
        // Check if there is another `.` in text.
        if (formattedValue.indexOf('.') === formattedValue.length - 1) {
            return formattedValue
        }

        // There is another `.` in text do not allow it.
        return formattedValue.slice(0, -1)
    }

    // Do not allow to put `.` before `,`
    if (
        formattedValue.includes('.') &&
        formattedValue.lastIndexOf(',') > formattedValue.indexOf('.')
    ) {
        return formattedValue.replace('.', '')
    }

    // Remove all non-numeric characters except for decimal point to format number properly.
    formattedValue = parseFloat(formattedValue)

    if (!isNaN(formattedValue)) {
        return Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(formattedValue)
    }

    return ''
}

const calculateCursorPosition = (
    currentPosition: number | null,
    oldValue: string,
    newValue: string
) => {
    if (currentPosition !== null && newValue !== oldValue) {
        return currentPosition + (newValue.length - oldValue.length)
    }

    return currentPosition
}

export const MoneyInput = ({ label, value, onChange }: Props) => {
    const [cursor, setCursorPosition] = React.useState<number | null>(null)
    // This state is necessary to handle situation when user click two times `.` in the place where it's not allowed.
    // In this situation second type does not trigger useEffect because cursor value will not change.
    const [inputModified, setInputModified] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (
            inputModified &&
            inputRef.current &&
            inputRef.current.selectionStart !== cursor
        ) {
            inputRef.current.setSelectionRange(cursor, cursor)
            setInputModified(false)
        }
    }, [cursor, value, inputModified])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.currentTarget.value
        const floatNumber = parseNumericString(inputText)
        const formattedText = formatValue(inputText)

        const currentCursorPosition = event.target.selectionStart
        const newCursorPosition = calculateCursorPosition(
            currentCursorPosition,
            inputText,
            formattedText
        )
        setCursorPosition(newCursorPosition)

        if (
            newCursorPosition !== currentCursorPosition &&
            inputText.length !== formattedText.length
        ) {
            setInputModified(true)
        }

        onChange(formattedText, floatNumber)
    }

    const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const floatNumber = parseNumericString(event.currentTarget.value)

        if (!isNaN(floatNumber)) {
            // Format value to include two fractional digits on end and remove $ sign
            onChange(
                numberToCurrency(floatNumber).replace('$', ''),
                floatNumber
            )
        }
    }

    return (
        <Input
            ref={inputRef}
            label={label}
            prefix={<DollarIcon width={9.35} height={18} />}
            type="text"
            placeholder="0.00"
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
        />
    )
}

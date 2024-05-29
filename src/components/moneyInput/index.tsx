import { Input } from '../input'
import React, { useEffect } from 'react'
import DollarIcon from '../../icons/dollar.svg?react'
import { numberToCurrency } from '../../utils/format.ts'
import {
    calculateCursorPosition,
    formatNumericValue,
    parseAndCleanNumericString,
} from './utils/utils.ts'

type Props = {
    label?: string
    value: string
    onChange: (formattedValue: string, value: number) => void
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
        const floatNumber = parseAndCleanNumericString(inputText)
        const formattedText = formatNumericValue(inputText)

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
        const floatNumber = parseAndCleanNumericString(
            event.currentTarget.value
        )

        if (!isNaN(floatNumber)) {
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

import { Input } from './Input'
import React, { useEffect } from 'react'

type Props = {
    value: string
    onChange: (value: string) => void
}

const formatValue = (inputText: string): string => {
    let formattedValue: string | number = inputText;

    // Do not allow to input starts with `.`
    if (formattedValue.startsWith('.')) {
        return formattedValue.substring(1)
    }

    if (formattedValue.endsWith('.')){
        // Check if there is another `.` in text.
        if ( formattedValue.indexOf('.') === formattedValue.length -1) {
            return formattedValue
        }

        // There is another `.` in text do not allow it.
        return formattedValue.slice(0, -1)
    }


    // Remove all non-numeric characters except for decimal point to format number properly.
    formattedValue = formattedValue.replace(/[^0-9.]/g, '')

    formattedValue = parseFloat(formattedValue);


    if (!isNaN(formattedValue)) {
        return Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(formattedValue)
    }

    return "";

}

const calculateCursorPosition = (currentPosition: number | null, oldValue: string, newValue: string) => {
    if (currentPosition !== null && newValue !== oldValue) {
        return currentPosition + (newValue.length - oldValue.length);
    }

    return currentPosition
}


export const MoneyInput = ({ value, onChange }: Props) => {
    const [cursor, setCursorPosition] = React.useState<number | null>(null)
    const inputRef = React.useRef<HTMLInputElement>(null);


    useEffect(() => {
        if (inputRef.current && value && inputRef.current.selectionStart !== cursor) {

            inputRef.current.setSelectionRange(cursor, cursor)
        }
    }, [cursor, value])


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.currentTarget.value
        const formattedText = formatValue(inputText)

        const currentCursorPosition = event.target.selectionStart;
        const cursorPosition = calculateCursorPosition(currentCursorPosition, inputText, formattedText)

        setCursorPosition(cursorPosition)
        console.log("onChange", inputText, formattedText)
        onChange(formattedText)
    }

    const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        let formattedValue = event.target.value.replace(/[^0-9.]/g, '')

        formattedValue = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(parseFloat(formattedValue)).replace('$', '')
        console.log("blur", event.target.value, formattedValue)
        onChange(formattedValue)
    }



    return (
        <Input
            ref={inputRef}
            type="text"
            placeholder="0.00"
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
        />
    )
}

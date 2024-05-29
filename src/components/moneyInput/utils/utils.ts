// Function to check if formattedValue includes a dot and the last comma is after the first dot

const isCommaAfterDot = (input: string) => {
    return input.includes('.') && input.lastIndexOf(',') > input.indexOf('.')
}

export const hasMoreThanOneDot = (input: string): boolean => {
    let dotCount = 0

    for (const char of input) {
        if (char === '.') {
            dotCount++
        }

        // If more than one dot is found, return true.
        if (dotCount > 1) {
            return true
        }
    }

    // Return false if zero or one dot is found.
    return false
}

// Function to check if the value ends with '0' or '00' in decimal part
const hasDecimalPartAndEndsWithZero = (formattedValue: string) => {
    return formattedValue.includes('.') && formattedValue.endsWith('0')
}

// Calculates the new cursor position after a value change in an input field.
export const calculateCursorPosition = (
    currentPosition: number | null,
    oldValue: string,
    newValue: string
) => {
    if (currentPosition !== null && newValue !== oldValue) {
        return currentPosition + (newValue.length - oldValue.length)
    }

    return currentPosition
}

// Removes all non-numeric characters except for the decimal point and parses the result to a float.
export const parseAndCleanNumericString = (input: string) => {
    const number = parseFloat(input.replace(/[^0-9.]/g, ''))
    if (!isNaN(number)) {
        return number
    }

    return 0
}

export const formatNumericValue = (
    inputText: string,
    previousValue: string
) => {
    let formattedValue: string | number = inputText

    // Do not allow to input starts with decimal point.
    if (formattedValue.startsWith('.')) {
        return formattedValue.substring(1)
    }

    if (formattedValue.endsWith('.')) {
        // Check if there is another decimal point in text.
        if (formattedValue.indexOf('.') === formattedValue.length - 1) {
            return formattedValue
        }

        // Remove double decimal point as it should be not allowed.
        return formattedValue.slice(0, -1)
    }

    // User add another dot which should be not allowed
    if (hasMoreThanOneDot(formattedValue)) {
        return previousValue
    }

    // Do not allow to put decimal point before thousands separator.
    if (isCommaAfterDot(formattedValue)) {
        return previousValue
    }

    let decimalPlaces = 0

    // Check situation when value is ending with `0` or `00` and parseFloat removes it with conversion.
    if (hasDecimalPartAndEndsWithZero(formattedValue)) {
        decimalPlaces = formattedValue.split('.')[1].length
    }

    formattedValue = parseAndCleanNumericString(formattedValue)

    if (!isNaN(formattedValue)) {
        return Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: 2,
        }).format(formattedValue)
    }

    return ''
}

import React, { useState } from 'react'

const MoneyFormatter: React.FC = () => {
    const [value, setValue] = useState<string>('')


    const formatMoney = (value: string) => {
        // Parse the input to a float number
        const parsedValue = parseFloat(value.replace(/,/g, ''))
        if (isNaN(parsedValue)) return ''

        // Format the number to a locale string with two decimal places
        const formattedValue = parsedValue.toLocaleString('en-US', {
            style: 'currency',
        })

        return formattedValue
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value

        // Allow only numbers and one decimal point in the input value
        const isValidInput = /^-?\d*(\.\d{0,2})?$/.test(inputValue)
        if (isValidInput) {
            const formattedValue = formatMoney(inputValue)
            setValue(formattedValue)
        }
    }

    return (
        <div className="mx-auto mt-10 max-w-md">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default MoneyFormatter

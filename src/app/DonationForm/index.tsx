import React from 'react'
import { DonationFormBanner } from './components/DonationFormBanner.tsx'

import { CloseButton } from './components/CloseButton.tsx'
import { MoneyInput } from '../../components/moneyInput'
import { MonthPicker } from '../../components/datepicker'
import { Button } from '../../components/button'
import { numberToCurrency } from '../../utils/format.ts'

const getNextMonthFromCurrentDate = () => {
    const currentDate = new Date()
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
}

const calculateMonthsSinceCurrentDate = (date: Date | null) => {
    if (date instanceof Date) {
        const today = new Date()
        const yearDifference = date.getFullYear() - today.getFullYear()
        const monthDifference = date.getMonth() - today.getMonth()

        return monthDifference + yearDifference * 12
    }

    return 1
}

export const DonationForm = () => {
    const [moneyText, setMoneyText] = React.useState('')
    const [moneyValue, setMoneyValue] = React.useState(0)
    const [date, setDate] = React.useState<Date>(getNextMonthFromCurrentDate())

    const handleOnMoneyInputChange = (
        formattedText: string,
        floatNumber: number
    ) => {
        setMoneyText(formattedText)
        setMoneyValue(floatNumber)
    }

    const totalAmount = calculateMonthsSinceCurrentDate(date) * moneyValue

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    })

    return (
        <div className="bg-white relative mx-auto rounded-lg pb-[58px] shadow-lg md:w-[600px] md:pb-10">
            <CloseButton
                onClick={() => console.log('onClose')}
                className="absolute right-[29px] top-[21px] z-10 md:hidden"
            />
            <DonationFormBanner />
            <div className="px-6 pt-8 md:px-10">
                <div className="md:flex md:gap-6">
                    <div className="pb-4 md:flex-1 md:pb-0">
                        <MoneyInput
                            label="I can donate"
                            value={moneyText}
                            onChange={handleOnMoneyInputChange}
                        />
                    </div>

                    <div className="pb-10 md:flex-1 md:pb-0">
                        <MonthPicker
                            minDate={getNextMonthFromCurrentDate()}
                            value={date}
                            onChange={setDate}
                            label="Every month until"
                        />
                    </div>
                </div>

                <div className="mb-10 rounded border border-border md:border-hidden">
                    <div className="flex px-4 py-6">
                        <p className="font-medium text-textPrimary md:text-2xl">
                            Total amount
                        </p>
                        <p className="font-inter text-purpleGray md:text-3xl flex-grow text-2xl font-bold md:text-right">
                            {numberToCurrency(totalAmount)}
                        </p>
                    </div>
                    <div className="bg-backgroundInfo text-balance rounded px-4 py-6 text-center font-normal">
                        <p className="text-xs">
                            You will be sending
                            <span className="font-bold">
                                {' '}
                                {numberToCurrency(moneyValue)}{' '}
                            </span>
                            every month, until
                            <span className="font-bold"> {formattedDate}</span>.
                            Thank you!
                        </p>
                    </div>
                </div>

                <div className="gap-[27px] lg:flex lg:justify-between">
                    <Button
                        variant="outlined"
                        className="hidden w-full md:block"
                    >
                        Cancel
                    </Button>
                    <Button className="w-full ">Continue</Button>
                </div>
            </div>
        </div>
    )
}

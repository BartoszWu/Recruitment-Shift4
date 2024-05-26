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
        <div className=" bg-white mx-auto max-w-sm rounded-lg pb-[58px] shadow-lg">
            <div className="relative">
                <CloseButton
                    onClick={() => console.log('onClose')}
                    className="absolute right-[29px] top-[21px] z-10 "
                />
                <DonationFormBanner />
            </div>
            <div className="px-6 pt-8">
                <div className="pb-4">
                    <MoneyInput
                        label="I can donate"
                        value={moneyText}
                        onChange={handleOnMoneyInputChange}
                    />
                </div>

                <div className="pb-10">
                    <MonthPicker
                        minDate={getNextMonthFromCurrentDate()}
                        value={date}
                        onChange={setDate}
                        label="Every month until"
                    />
                </div>

                <div className="mb-10 rounded border border-border">
                    <div className="px-4 py-6">
                        <p className="font-medium text-textPrimary">
                            Total amount
                        </p>
                        <p className="font-inter text-purpleGray text-2xl font-bold">
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

                <div className="lg:flex lg:justify-between">
                    <Button className="w-full ">Continue</Button>
                    {/*<Button className="hidden w-full md:block lg:mr-2 lg:w-auto">*/}
                    {/*    Cancel*/}
                    {/*</Button>*/}
                </div>
            </div>
        </div>
    )
}

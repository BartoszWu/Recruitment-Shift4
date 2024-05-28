import React from 'react'
import { DonationFormBanner } from './components/DonationFormBanner.tsx'

import { CloseButton } from './components/CloseButton.tsx'
import { MoneyInput } from '../../components/moneyInput'
import { MonthPicker } from '../../components/datepicker'
import { Button } from '../../components/button'
import { DonationSummary } from './components/DonationSummary.tsx'

const getNextMonthFromCurrentDate = () => {
    const currentDate = new Date()
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
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

    return (
        <div className="bg-white relative mx-auto rounded-lg pb-[50px] md:w-[600px] md:pb-10 md:shadow-lg">
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
                <DonationSummary moneyValue={moneyValue} date={date} />
                <div className="gap-[27px] lg:flex lg:justify-between">
                    <Button
                        variant="outlined"
                        className="hidden w-full md:block"
                        onClick={() => console.log('onClose')}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="w-full"
                        onClick={() => console.log('continue')}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    )
}

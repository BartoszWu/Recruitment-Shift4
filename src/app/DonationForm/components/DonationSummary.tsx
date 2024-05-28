import { numberToCurrency } from '../../../utils/format.ts'

type Props = {
    moneyValue: number
    date: Date
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

export const DonationSummary = ({ date, moneyValue }: Props) => {
    const totalAmount = calculateMonthsSinceCurrentDate(date) * moneyValue

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    })
    return (
        <div className="mb-10 rounded border border-border md:border-hidden">
            <div className="flex px-4 py-6">
                <p className="font-medium text-textPrimary md:text-2xl">
                    Total amount
                </p>
                <p className="font-inter md:text-3xl flex-grow text-right text-2xl font-bold text-textSecondary">
                    {numberToCurrency(totalAmount)}
                </p>
            </div>
            <div className="bg-backgroundInfo rounded px-4 py-6 text-center font-normal">
                <p className="text-xs">
                    You will be sending
                    <span className="font-bold">
                        {' '}
                        {numberToCurrency(moneyValue)}{' '}
                    </span>
                    every month, until
                    <span className="font-bold"> {formattedDate}</span>. Thank
                    you!
                </p>
            </div>
        </div>
    )
}

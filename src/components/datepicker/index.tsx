import { Label } from '../label'
import { DatepickerButton } from './components/DatepickerButton.tsx'

type Props = {
    minDate: Date
    value: Date
    onChange: (date: Date) => void
    label?: string
}

export const MonthPicker = ({ value, minDate, onChange, label }: Props) => {
    const handlePrevMonth = () => {
        const currentYear = minDate.getFullYear()
        const currentMonth = minDate.getMonth()
        const prevDate = new Date(value.getFullYear(), value.getMonth() - 1)

        if (
            prevDate.getFullYear() > currentYear ||
            (prevDate.getFullYear() === currentYear &&
                prevDate.getMonth() >= currentMonth)
        ) {
            onChange(prevDate)
        }
    }

    const handleNextMonth = () => {
        const nextDate = new Date(value.getFullYear(), value.getMonth() + 1)
        onChange(nextDate)
    }

    const year = value.getFullYear()
    const monthName = value.toLocaleDateString('en-US', {
        month: 'long',
    })

    return (
        <>
            {label && <Label>{label}</Label>}
            <div className="flex items-center rounded border border-border p-3 align-middle">
                <DatepickerButton onClick={handlePrevMonth} type="left" />
                <div className="flex flex-grow flex-col items-center px-4">
                    <span className="text-xl font-rubik font-medium text-textSecondary">
                        {monthName}
                    </span>
                    <span className="text-xs font-workSans font-normal text-textLabel">
                        {year}
                    </span>
                </div>
                <DatepickerButton onClick={handleNextMonth} type="right" />
            </div>
        </>
    )
}

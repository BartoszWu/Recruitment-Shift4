import React from 'react'

import type { Meta } from '@storybook/react'
import { MoneyInput } from './MoneyInput'
const meta = {
    title: 'Components/MoneyInput',
    component: MoneyInput,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof MoneyInput>

export default meta
// type Story = StoryObj<typeof meta>

export const Basic = {
    render: () => {
        const [value, onChange] = React.useState('')
        const handleOnChange = (newVal: string) => {
            onChange(newVal)
        }

        return (
            <>
                <div>1,234.56</div>
                <MoneyInput value={value} onChange={handleOnChange} />
            </>
        )
    },
}

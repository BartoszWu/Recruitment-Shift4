import React from 'react'

import type { Meta } from '@storybook/react'
import { MoneyInput } from './'

const meta = {
    title: 'Components/MoneyInput',
    component: MoneyInput,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof MoneyInput>

export default meta

export const Basic = {
    render: () => {
        const [value, onChange] = React.useState('')
        const handleOnChange = (newVal: string) => {
            onChange(newVal)
        }

        return <MoneyInput value={value} onChange={handleOnChange} />
    },
}

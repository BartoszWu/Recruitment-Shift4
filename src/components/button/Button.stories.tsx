import type { Meta } from '@storybook/react'
import { Button } from './'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Button>

export default meta

export const Basic = {
    render: () => {
        return (
            <Button onClick={() => console.log('click')}>This is Button</Button>
        )
    },
}

export const Variants = {
    render: () => {
        return (
            <div className="flex w-60 flex-col gap-2">
                <Button onClick={() => console.log('click')}>
                    Default Variant = Primary
                </Button>
                <Button onClick={() => console.log('click')} variant="outlined">
                    Outlined
                </Button>
            </div>
        )
    },
}

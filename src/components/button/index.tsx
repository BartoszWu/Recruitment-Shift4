import React from 'react'
import { clsx } from 'clsx'

type Props = {
    variant?: 'primary' | 'outlined'
    className?: string
    children: React.ReactNode
    onClick: () => void
}

const variantStyles = {
    primary:
        'text-white bg-buttonPrimary hover:bg-buttonPrimaryHover active:bg-buttonPrimaryActive',
    outlined:
        'text-textSecondary bg-white hover:bg-buttonOutlinedHover active:bg-buttonOutlinedHover hover:bg-opacity-10 active:bg-opacity-25 border-textSecondary border',
}

export const Button = ({
    onClick,
    variant = 'primary',
    className,
    children,
}: Props) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                `
             text-base rounded p-4 font-workSans font-semibold
        `,
                variantStyles[variant],
                className
            )}
        >
            {children}
        </button>
    )
}

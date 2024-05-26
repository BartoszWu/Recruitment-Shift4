import React from 'react'
import { clsx } from 'clsx'

type Props = {
    variant?: 'primary' | 'outlined'
    className?: string
    children: React.ReactNode
    onClick?: () => void
}

const variantStyles = {
    primary:
        'text-white bg-midnightPurple hover:bg-twilightPurple active:bg-darkMidnightPurple',
    outlined:
        'text-textSecondary bg-white hover:bg-lavenderMist active:bg-lavenderMist hover:bg-opacity-10 active:bg-opacity-25 border-textSecondary border',
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
             text-base rounded px-4 py-6 font-workSans font-semibold
        `,
                variantStyles[variant],
                className
            )}
        >
            {children}
        </button>
    )
}

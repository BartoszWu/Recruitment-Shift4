import * as React from 'react'
import { Label } from '../label'

type Props = {
    label?: string
    className?: string
    prefix?: React.ReactNode
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>

export const Input = React.forwardRef<HTMLInputElement, Props>(
    (
        { className, label, type, value, onChange, prefix, ...inputProps },
        ref
    ) => {
        return (
            <div className={className}>
                {label && <Label>{label}</Label>}
                <div className="focus-within:border-midnightPurple flex items-center rounded border border-border p-4 align-middle">
                    {prefix && <span className="pr-4">{prefix}</span>}
                    <input
                        className="w-full font-rubik text-2xl text-textSecondary outline-none placeholder:font-rubik placeholder:text-textMuted"
                        type={type ?? 'text'}
                        value={value}
                        onChange={onChange}
                        ref={ref}
                        {...inputProps}
                    />
                </div>
            </div>
        )
    }
)

Input.displayName = 'Input'

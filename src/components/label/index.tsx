import * as React from 'react'

type Props = {
    children: React.ReactNode
} & React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children }: Props) => (
    <label className="block text-textLabel text-sm font-workSans font-medium pb-1.5 uppercase">
        {children}:
    </label>
)

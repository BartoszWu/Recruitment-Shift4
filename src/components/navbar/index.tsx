import Logo from '../../icons/logo.svg?react'
import { clsx } from 'clsx'

type Props = {
    className?: string
}

export const NavBar = ({ className }: Props) => (
    <div className={clsx('bg-white flex items-center px-10 py-6', className)}>
        <Logo />
    </div>
)

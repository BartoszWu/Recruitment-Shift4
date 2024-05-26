import CloseIcon from '../../../icons/close.svg?react'

type Props = {
    onClick?: () => void
    className: string
}

export const CloseButton = ({ onClick, className }: Props) => {
    return (
        <button onChange={onClick} className={className}>
            <CloseIcon width={14} height={14} />
        </button>
    )
}

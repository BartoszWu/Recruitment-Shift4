import ArrowLeft from '../../../icons/arrowLeft.svg?react'
import ArrowRight from '../../../icons/arrowRight.svg?react'

//TODO: change it to button

type Props = {
    onClick: () => void
    type: 'left' | 'right'
}

const SVGMapComponents = {
    left: ArrowLeft,
    right: ArrowRight,
}

export const DatepickerButton = ({ onClick, type }: Props) => {
    const Component = SVGMapComponents[type]
    return (
        <button
            onClick={onClick}
            className="hover:bg-backgroundHover text-gray-800 flex h-6 w-6 items-center justify-center rounded rounded-l font-bold focus:outline-none"
        >
            <Component width={7.4} height={12} />
        </button>
    )
}

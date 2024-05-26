import GivigBlockSVG from '../../../icons/givingBlock.svg?react'
export const DonationFormBanner = () => {
    return (
        <div className="bg-salmon relative px-6 pb-[28px] pt-[33px] text-center">
            <div className="flex justify-center pb-6">
                <GivigBlockSVG />
            </div>
            <h1 className="text-midnightPurple text-center text-2xl font-semibold">
                The Giving Block
            </h1>
            <h2 className="text-purpleGray font-inter text-center text-sm">
                Set up your donation goal!
            </h2>
        </div>
    )
}

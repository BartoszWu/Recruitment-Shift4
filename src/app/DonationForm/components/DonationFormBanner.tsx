import GivigBlockSVG from '../../../icons/givingBlock.svg?react'
export const DonationFormBanner = () => {
    return (
        <div className="bg-salmon relative items-center px-6 pb-[28px] pt-[33px] text-center md:flex md:gap-[27px]">
            <div className="flex justify-center pb-6 md:pb-0">
                <GivigBlockSVG />
            </div>
            <div>
                <h1 className="text-midnightPurple md:text-3xl text-center text-2xl font-semibold md:pb-1 md:text-left">
                    The giving block
                </h1>
                <h2 className="text-purpleGray font-inter text-center text-sm md:text-left">
                    Set up your donation goal!
                </h2>
            </div>
        </div>
    )
}

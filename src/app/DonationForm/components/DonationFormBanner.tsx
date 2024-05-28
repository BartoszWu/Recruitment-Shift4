import GivingBlockSVG from '../../../icons/givingBlock.svg?react'

export const DonationFormBanner = () => {
    return (
        <div className="bg-alertBackground relative items-center px-6 pb-[28px] pt-[33px] text-center md:flex md:gap-[27px] md:px-10">
            <div className="flex justify-center pb-6 md:pb-0">
                <GivingBlockSVG />
            </div>
            <div>
                <h1 className="text-buttonPrimary md:text-3xl text-center text-2xl font-semibold md:pb-1 md:text-left">
                    The giving block
                </h1>
                <h2 className="font-inter text-center text-sm text-textSecondary md:text-left">
                    Set up your donation goal!
                </h2>
            </div>
        </div>
    )
}

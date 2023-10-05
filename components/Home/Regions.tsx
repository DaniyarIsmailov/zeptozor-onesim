import Carousel from "../Carousel"
import Category from "../Category"
import Region from "../Region"

export default function Regions() {
    const regions = [
        <Region region='europe' categories={['Региональные']} forRegion='Европы' price='$3.90 - $29.90' />,
        <Region region='usa' categories={['Локальные']} forRegion='США' price='$3.90 - $29.90' />,
        <Region region='france' categories={['Европейские', 'Локальные']} forRegion='Франции' price='$3.90 - $29.90' />,
        <Region region='spain' categories={['Европейские', 'Локальные']} forRegion='Испании' price='$3.90 - $29.90' />,
        <Region region='middle east' categories={['Региональные']} forRegion='Ближнего востока' price='$3.90 - $29.90' />,

        <Region region='usa' categories={['Локальные']} forRegion='США' price='$3.90 - $29.90' />,
        <Region region='france' categories={['Европейские', 'Локальные']} forRegion='Франции' price='$3.90 - $29.90' />,
        <Region region='spain' categories={['Европейские', 'Локальные']} forRegion='Испании' price='$3.90 - $29.90' />,
        <Region region='middle east' categories={['Региональные']} forRegion='Ближнего востока' price='$3.90 - $29.90' />,

        <Region region='usa' categories={['Локальные']} forRegion='США' price='$3.90 - $29.90' />,
        <Region region='france' categories={['Европейские', 'Локальные']} forRegion='Франции' price='$3.90 - $29.90' />,
        <Region region='spain' categories={['Европейские', 'Локальные']} forRegion='Испании' price='$3.90 - $29.90' />,
        <Region region='middle east' categories={['Региональные']} forRegion='Ближнего востока' price='$3.90 - $29.90' />
    ]
    return (
        <div className='w-full py-[40px] mb-[93px]'>
            <div className='px-20 sm:px-80'>
                <div className='text-28 sm:text-36 font-semibold leading-120'>Куда вы отправитесь в следующий раз?</div>
                <div className='flex gap-10 sm:gap-20 sm:p-[10px] mt-20 flex-wrap sm:inline-flex sm:justify-center sm:items-center sm:rounded sm:bg-bg'>
                    <Category active={true} category='Самые популярные' />
                    <Category active={false} category='Региональные eSIM' />
                    <Category active={false} category='Локальные eSIMs' />
                </div>
            </div>
            <div className='sm:hidden h-[20px]'></div>
            <Carousel items={regions} />
        </div>
    )
}
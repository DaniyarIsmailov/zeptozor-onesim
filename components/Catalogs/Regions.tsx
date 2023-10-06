import Region from "../Region"

export default function Regions() {
    const regions = [
        <Region region='europe' categories={['Региональные']} forRegion='Европы' price='$3.90 - $29.90' width='100%' key={0} />,
        <Region region='usa' categories={['Локальные']} forRegion='США' price='$3.90 - $29.90' width='100%' key={43} />,
        <Region region='france' categories={['Европейские', 'Локальные']} forRegion='Франции' price='$3.90 - $29.90' width='100%' key={1} />,
        <Region region='spain' categories={['Европейские', 'Локальные']} forRegion='Испании' price='$3.90 - $29.90' width='100%' key={2} />,
        <Region region='middle east' categories={['Региональные']} forRegion='Ближнего востока' price='$3.90 - $29.90' width='100%' key={3} />,
    ]

    return (
        <div className='w-full px-20 sm:px-80 py-40 grid grid-cols-1 sm:grid-cols-4 gap-40 sm:gap-20'>
            {
                regions.map(i => i)
            }
        </div>
    )
}
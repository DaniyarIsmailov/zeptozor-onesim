function Advantage({ icon, heading, description }: { icon: 'compass' | 'wifi' | 'map', heading: string, description: string }) {
    return (
        <div className='flex w-[389px] flex-col gap-20 items-center'>
            <div className='w-[40px] h-[40px]'>
                <img src={`images/icons/colored/${icon}.svg`} />
            </div>
            <div className='flex w-full gap-10 flex-col justify-center'>
                <div className='text-center text-20 font-semibold leading-120'>{heading}</div>
                <div className='text-center text-gray leading-120'>{description}</div>
            </div>
        </div>
    )
}

export default function Advantages() {
    return (
        <div className='w-full h-full relative bg-bg -z-20 px-80 py-40'>
            <div className='w-[363px] h-[44px] absolute -z-10 top-[20px] left-[20px]'>
                <img src='images/wind.svg' />
            </div>
            <div className='w-[363px] h-[44px] absolute -z-10 bottom-[20px] right-[20px]'>
                <img src='images/wind.svg' />
            </div>
            <div className='flex flex-col sm:flex-row w-full h-full gap-40 sm:gap-0 items-center sm:items-start sm:justify-center'>
                <Advantage icon='compass' heading='Начните путешествие без стресса' description='Подключайтесь сразу после приземления' />
                <Advantage icon='wifi' heading='Делитесь воспоминаниями с друзьями' description='Нет необходимости искать Wi-Fi, будьте всегда на связи' />
                <Advantage icon='map' heading='Путешествуйте между странами' description='Региональные eSIM поддерживают несколько стран' />
            </div>
        </div>
    )
}
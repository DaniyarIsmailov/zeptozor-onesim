function Offer({ bg, heading, description }: { bg: string, heading: string, description: string }) {
    return (
        <div className='w-full h-[208px]'>
            <div className='w-full h-full rounded' style={{ background: `url('images/offers/${bg}.png'), lightgray 50% / cover no-repeat` }}>
                <div className='flex flex-col justify-end w-full h-full gap-10 rounded p-20' style={{ background: 'linear-gradient(90deg, #031D22 0%, rgba(1, 30, 36, 0.00) 100%)' }}>
                    <div className='text-white font-semibold leading-120'>onesim</div>
                    <div className='text-white font-semibold text-26 leading-120'>{heading}</div>
                    <div className='leading-120 text-white'>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default function Offers() {
    return (
        <div className='w-full py-40 px-20 sm:px-80'>
            <div className='text-28 sm:text-36 font-semibold leading-120'>Наши специальные предложения</div>
            <div className='w-full flex flex-col sm:flex-row gap-20 items-between sm:justify-between mt-[20px]'>
                <Offer bg='mexico' heading='$11,90 за 3GB в Мексике' description='Покрытие дополнительных 45 стран' />
                <Offer bg='europe' heading='-30% для Европы' description='Охватывают 38 стран' />
            </div>
        </div>
    )
}
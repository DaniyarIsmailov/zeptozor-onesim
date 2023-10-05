function Method({ icon }: { icon: string }) {
    return (
        <div className='w-[22px] h-[15px] border-[0.5px] rounded-[2px] border-[#D9D9D9]'>
            <img src={`images/paymentmethods/${icon}.svg`} />
        </div>
    )
}

export default function Footer() {
    return (
        <div className='flex w-full flex-col sm:flex-row sm:flex-wrap'>
            <div className='flex flex-col sm:flex-row w-full px-20 sm:px-80 py-40 gap-20 bg-bg'>
                <div className='w-full'>
                    <div className='mb-20 text-32 font-extrabold'>onesim</div>
                    <div className='leading-150 sm:leading-120'>
                        Onesim LLC<br />530-B Harkle Road, Suite 100, Santa Fe, NM<br /> 87505, USA
                    </div>
                </div>
                <div className='flex flex-col w-[287px] gap-20'>
                    <div className='font-semibold leading-120'>ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</div>
                    <div className='leading-120'>Политика конфиденциальности</div>
                    <div className='leading-120'>Условия и положения</div>
                </div>
                <div className='flex flex-col w-[286px] gap-20'>
                    <div className='font-semibold leading-120'>ПОДДЕРЖКА КЛИЕНТОВ</div>
                    <div className='leading-120'>Справочный центр</div>
                    <div className='leading-120'>Связаться с нами</div>
                </div>
            </div>
            <div className='w-full flex flex-col sm:flex-row px-20 py-20 sm:py-10 sm:px-80 gap-20 sm:gap-[676px]'>
                <div className='leading-120'>© 2022 Onesim. Все права защищены.</div>
                <div className='w-[257px] h-[16px] flex gap-[4px]'>
                    <Method icon='stripe' />
                    <Method icon='visa' />
                    <Method icon='mastercard' />
                    <Method icon='amex' />
                    <Method icon='discover' />
                    <Method icon='o' />
                    <Method icon='jcb' />
                    <Method icon='unionpay' />
                    <Method icon='googlepay' />
                    <Method icon='applepay' />
                </div>
            </div>
        </div>
    )
}
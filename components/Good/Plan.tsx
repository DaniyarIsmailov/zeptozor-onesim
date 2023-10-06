function Plan({ active, traffic, duration, price, available }: { active: boolean, traffic: number, duration: number, price: number, available: boolean }) {
    return (
        <div className={`flex p-[20px] items-center justify-between flex-wrap rounded-[10px] border ${ active ? 'border-[#33C476] bg-[#E3F0E9]' : 'border-[#E1E5EC]' }`} style={{ boxShadow: '0px 0px 31px 0px rgba(0, 0, 0, 0.05)' }}>
            <div className='flex flex-col justify-center items-start gap-[10px]'>
                <div className='text-[20px] font-[600] leading-[120%]'>Всего трафика: {traffic} ГБ</div>
                <div className='text-[#848D9F] font-[600] leading-[120%]'>Срок действия: {duration} дней</div>
            </div>
            <div className='flex w-[79px] flex-col justify-center items-start gap-[10px]'>
                <div className={`leading-[120%] font-[600] ${ active ? 'text-[#33C476]' : 'text-[#848D9F]' }`}>${price} USD</div>
                <div className={`font-[600] leading-[120%] ${ !available ? 'text-#C43333]' : '' }`}>{ available ? 'В наличии' : 'Нет в наличии' }</div>
            </div>
        </div>
    )
}

function Method({ icon }: { icon: string }) {
    return (
        <div className='w-[60px] h-[40px]'>
            <img src={`images/paymentmethods/gray/${ icon }.svg`} />
        </div>
    )
}

export default function ChoosePlan() {
    return (
        <div className='py-[20px] flex flex-col gap-[20px]'>
            <div className='flex w-full px-[20px] flex-col gap-[20px] rounded-[10px] bg-[#F6F7F9]'>
                <div className='flex gap-[20px] items-start'>
                    <div className='text-[28px] w-[233px] font-[600] leading-[120%]'>Выбрите тарифный план</div>
                    <div className='flex p-[12px] justify-center items-center gap-[10px] rounded-[10px] border-2 border-[#E1E5EC]'>
                        <div className='font-[600]'>USD ($)</div>
                        <div className='w-[6px] h-[3px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M7 1.5L4 4.5L1 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <Plan active={true} traffic={1} duration={7} price={3.90} available={true} />
                <Plan active={false} traffic={3} duration={30} price={6.90} available={false} />
                <Plan active={false} traffic={5} duration={30} price={9.90} available={false} />
                <Plan active={false} traffic={10} duration={30} price={16.90} available={false} />
                <Plan active={false} traffic={20} duration={30} price={29.90} available={false} />
            </div>
            <div className='flex w-full px-[20px] flex-wrap gap-[13px] rounded-[10px] bg-[#F6F7F9]'>
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
    )
}
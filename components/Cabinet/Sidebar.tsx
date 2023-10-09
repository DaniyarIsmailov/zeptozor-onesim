function Button({ active, icon, heading }: { active: boolean, icon: string, heading: string }) {
    return (
        <div className={`w-full p-[12px] gap-10 flex rounded ${active ? 'bg-[#E1E5EC]' : ''}`}>
            <img className='w-[18px]' src={`images/icons/${icon}.svg`} alt={icon} />
            <div>{heading}</div>
        </div>
    )
}

export default function Sidebar({ active }: { active: 'sim' | 'id' | 'co' | 'bag' }) {
    return (
        <div className='w-1/3 hidden sm:flex flex-col gap-20'>
            <div className='w-full flex flex-col bg-bg rounded p-20 gap-20'>
                <div className='text-20 font-semibold leading-120'>Личный кабинет</div>
                <div>
                    <Button active={active == 'sim'} icon='sim' heading='Мои eSIM' />
                    <Button active={active == 'id'} icon='id' heading='Личная информация' />
                    <Button active={active == 'co'} icon='co' heading='Методы оплаты' />
                    <Button active={active == 'bag'} icon='bag' heading='Мои заказы' />
                </div>
            </div>
                <div className='flex p-[12px] items-center justify-center gap-10 rounded bg-[#E1E5EC]'>
                <div className='font-semibold'>Выйти</div>
                <img className='w-[16px]' src='images/icons/exit.svg' alt='exit' />
            </div>
        </div>
    )
}
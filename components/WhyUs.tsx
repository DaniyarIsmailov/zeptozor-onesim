function Reason({ icon, heading, description }: { icon: string, heading: string, description: string }) {
    return (
        <div className='w-full flex flex-col gap-20 h-[162px] rounded border p-20 border-[#E1E5EC]' style={{ boxShadow: 'box-shadow: 0px 0px 31px 0px #0000000D' }}>
            <img className='w-[37px] h-[30px]' src={`images/icons/${icon}.svg`} />
            <div className='w-full flex flex-col gap-10'>
                <div className='text-20 font-semibold leading-120'>{heading}</div>
                <div className='text-gray leading-120'>{description}</div>
            </div>
        </div>
    )
}

export default function WhyUs({ region }: { region?: string }) {
    return (
        <div className='w-full py-40 px-20 sm:px-80 bg-bg'>
            <div className='font-semibold text-28 sm:text-36 mb-[20px] sm:mb-[40px] leading-120'>Почему стоит выбрать нашу туристическую eSIM {region}</div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-20'>
                <Reason icon='wifi' heading='Быстрый 4G/5G' description='Быстрый 4G/5G' />
                <Reason icon='qr' heading='Активация по QR-коду' description='Вышлем QR-код сразу после оплаты' />
                <Reason icon='co' heading='Без скрытых платежей' description='Платите только за трафик. Если он закончится, можете купить новый пакет' />
                <Reason icon='bag' heading='Предоплаченный пакет' description='Отсутствие кредитного договора и автоматического продления' />
                <Reason icon='globe' heading='Работает в нескольких странах' description='Наши региональные пакеты работают в нескольких странах' />
                <Reason icon='id' heading='Без загрузки документов' description='Вам не нужно предоставлять документы, удостоверяющие личность' />
            </div>
        </div>
    )
}
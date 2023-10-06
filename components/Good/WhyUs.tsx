function Reason({ icon, heading, description }: { icon: string, heading: string, description: string }) {
    return (
        <div className='w-[389px] rounded-[10px] border p-[20px] border-[#E1E5EC]' style={{ boxShadow: 'box-shadow: 0px 0px 31px 0px #0000000D' }}>
            <img className='w-[37px] h-[30px] mb-[20px]' src={`images/icons/${ icon }.svg`} />
            <div className='w-full'>
                <div className='text-[20px] font-semibold leading-[120%] mb-[10px]'>{heading}</div>
                <div className='text-[#848D9F] leading-[120%]'>{description}</div>
            </div>
        </div>
    )
}

export default function WhyUs() {
    return (
        <div className='w-full py-[40px] px-[20px] sm:px-[80px] bg-[#F6F7F9]'>
            <div className='sm:h-[43px] font-semibold text-[28px] sm:text-36 mb-[20px] sm:mb-[40px] leading-[120%]'>Почему стоит выбрать нашу туристическую eSIM для Европы</div>
            <div className='w-full justify-center flex flex-wrap gap-[20px]'>
                <Reason icon='wifi' heading='Быстрый 4G/5G' description='Сотрудничаем с мировыми операторами с самым быстрым интернетом' />
                <Reason icon='qr' heading='Активация по QR-коду' description='Вышлем QR-код сразу после оплаты' />
                <Reason icon='co' heading='Без скрытых платежей' description='Платите только за трафик. Если он закончится, можете купить новый пакет' />
                <Reason icon='bag' heading='Предоплаченный пакет' description='Отсутствие кредитного договора и автоматического продления' />
                <Reason icon='globe' heading='Работает в нескольких странах' description='Наши региональные пакеты работают в нескольких странах' />
                <Reason icon='id' heading='Без загрузки документов' description='Вам не нужно предоставлять документы, удостоверяющие личность' />
            </div>
        </div>
    )
}
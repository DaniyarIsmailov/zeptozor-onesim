function Step({ icon, heading, description, additionally }: { icon: string, heading: string, description: string, additionally?: string }) {
    return (
        <div className='w-full sm:w-[287px] flex flex-col items-center gap-10'>
            <img src={`images/icons/colored/${icon}.svg`} />
            <div className='text-center text-20 mt-10 font-semibold leading-120'>{heading}</div>
            <div className='text-gray text-center leading-120'>{description}</div>
            {
                additionally &&
                (
                    <div className='text-blue leading-120 text-center'>{additionally}</div>
                )
            }
        </div>
    )
}

export default function HowDoesItWork({ region }: { region: string }) {
    return (
        <div className='px-20 sm:px-80 py-40'>
            <div className='w-full sm:h-auto flex flex-col gap-40'>
                <div className='w-full flex flex-col gap-20'>
                    <div className='text-center text-28 font-semibold leading-120'>Как работает eSIM для Европы</div>
                    <div className='leading-120 text-center'>
                        Перед покупкой убедитесь, что ваш
                        <div className='text-blue font-semibold leading-120'>смартфон поддерживает eSIM</div>
                    </div>
                </div>
                <div className='w-full flex flex-col sm:flex-row gap-y-20 justify-between'>
                    <Step icon='mail' heading='Получите QR-код по электронной почте' description='Вы получите QR-код и инструкции по активации сразу после оплаты' />
                    <Step icon='qr' heading='Отсканируйте код' description='Отсканируйте код с помощью камеры телефона и запустите активацию пакета' additionally='Посмотреть список поддерживаемых смартфонов' />
                    <Step icon='wifi' heading='Назначьте сотовые данные' description='Назначьте сотовые данные с оригинального номера на eSIM' />
                    <Step icon='globe' heading='Включите данные и наслаждайтесь интернетом' description='Включите роуминг данных в стране назначения' />
                </div>
            </div>
        </div>
    )
}
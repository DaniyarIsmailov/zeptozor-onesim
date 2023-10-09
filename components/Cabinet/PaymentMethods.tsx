import Arrow from "../svg/Arrow"

function Method({ name, expires }: { name: string, expires: string }) {
    return (
        <div className='w-full h-[120px] gap-10 p-20 flex flex-col rounded bg-bg relative'>
            <img className='absolute top-[20px] right-[20px] w-[14px]' src='images/icons/threedots.svg' alt='...' />
            <div className='font-semibold leading-150'>{name}</div>
            <div>
                <div className='text-orange font-semibold leading-150'>Дата окончания</div>
                <div className='leading-150'>{expires}</div>
            </div>
        </div>
    )
}

function Field({ active, label, value }: { active: boolean, label: string, value?: string }) {
    return (
        <div className={`w-full rounded border-2 ${active ? 'border-orange' : 'border-[#E1E5EC]'} p-[12px] relative flex`}>
            <input className='w-full h-full outline-none peer text-[14px] bg-inherit' placeholder='' />
            <label className='absolute pointer-events-none text-15 top-auto peer-focus:text-[10px] peer-focus:top-[3px] peer-[&:not(:placeholder-shown)]:top-[3px] peer-[&:not(:placeholder-shown)]:text-[10px]'>{label}</label>
        </div>
    )
}

export default function PaymentMethods() {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex flex-col gap-20'>
                <div className='w-full flex flex-col gap-20 p-20 rounded bg-bg'>
                    <div className='text-orange text-20 font-semibold leading-120'>Методы оплаты</div>
                    <div className='leading-150'>Вы пока не добавили способ оплаты. Нажмите кнопку ниже, чтобы добавить первый способ оплаты</div>
                </div>
                <div className='w-full grid grid-cols-3 gap-20'>
                        <Method name='7461 2412 9481 2456' expires='02/24' />
                    <div className='w-full h-[120px] flex flex-col items-center justify-center rounded bg-bg'>
                        <img className='w-[40px]' src='images/icons/plus.svg' alt='add new' />
                        <div className='leading-150'>Добавить новый способ оплаты</div>
                    </div>
                </div>
            </div>
            <div className='mt-[100px] w-full flex flex-col gap-20'>
                <div className='flex gap-10'>
                    <Arrow />
                    <div>Назад</div>
                </div>
                <div className='w-full flex flex-col p-20 gap-20 bg-bg rounded'>
                    <div className='font-semibold text-20'>Новая банковская карта</div>
                    <Field active={false} label='Номер карты' value='7461 2412 9481 2456' />
                    <div className='flex gap-20'>
                        <Field active={false} label='Дата окончания действия' value='02/24' />
                        <Field active={false} label='CVC' value='...' />
                    </div>
                    <div className='w-full flex items-center justify-center p-[12px] font-semibold rounded bg-orange text-white'>Добавить</div>
                </div>
            </div>
        </div>
    )
}
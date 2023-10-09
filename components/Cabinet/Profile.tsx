function Field({ active, label, value }: { active: boolean, label: string, value?: string }) {
    return (
        <div className={`w-full rounded border-2 ${active ? 'border-orange' : 'border-[#E1E5EC]'} p-[12px] relative flex`}>
            <input className='w-full h-full outline-none peer text-[14px] bg-inherit' placeholder='' />
            <label className='absolute pointer-events-none text-15 top-auto peer-focus:text-[10px] peer-focus:top-[3px] peer-[&:not(:placeholder-shown)]:top-[3px] peer-[&:not(:placeholder-shown)]:text-[10px]'>{label}</label>
        </div>
    )
}

function Checkbox() {
    return (
        <div className='w-[16px] h-[16px] bg-orange rounded-[3px] flex items-center justify-center'>

        </div>
    )
}

interface variant {
    name: string
    id: string
    prefix?: string
}

function Choise({ variants }: { variants: variant[] }) {
    return (
        <select className='w-full bg-inherit p-[12px] outline-none rounded border-2 border-[#E1E5EC] text-gray text-[14px]' name='country' id='country'>
            {
                variants.map((i, index) => (
                    <option className='' key={index} value={i.id}>{i.prefix} {i.name}</option>
                ))
            }
        </select>
    )
}

export default function Profile() {
    let countries: variant[] = [
        {
            name: 'Kazakhstan',
            id: 'kz',
            prefix: '+7'
        }
    ]
    return (
        <div className='w-full flex flex-col gap-20 p-20 rounded bg-bg'>
            <div className='text-20 font-semibold'>Личная информация</div>
            <div className='flex flex-col gap-10 w-full'>
                <div className='flex gap-10'>
                    <Field active={true} label='Имя' value='Шыңғысхан' />
                    <Field active={false} label='Фамилия' value='Армия' />
                </div>
                <Field active={false} label='Email' value='zeptozor@gmail.com' />
                <div className='flex gap-10'>
                    <Checkbox />
                    <div className='text-[14px] leading-150'>Получать новости и акции на почту</div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-full justify-between'>
                <div className='w-full flex gap-20'>
                    <Choise variants={countries} />
                    <Field active={false} label='Телефон' value='(707) 777 6943' />
                </div>
                <Choise variants={[{ name: 'Казахстан', id: 'default' }]} />
                <Choise variants={[{ name: 'Ваш смартфон', id: 'default' }]} />
            </div>
            <div className='w-full p-[12px] flex items-center justify-center rounded bg-[#E1E5EC] text-gray font-semibold'>Сохранить</div>
        </div>
    )
}
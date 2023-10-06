function Country({ name, five }: { name: string, five: boolean }) {
    return (
        <div className='w-1/2 sm:w-1/3 flex gap-5'>
            <div className='leading-120'>{name}</div>
            <div className='leading-120 font-semibold'>{ five ? '5G' : '' }</div>
        </div>
    )
}

interface Country {
    name: string
    five: boolean
}

function Europe() {
  return (
    <div className='w-full h-[600px] bg-black'>
    </div>
  )
}

export default function Map() {
    const countries: Country[] = [
        { name: 'Австрия', five: false },
        { name: 'Греция', five: false },
        { name: 'Бельгия', five: true },
        { name: 'Венгрия', five: false },
        { name: 'Болгария', five: true },
        { name: 'Исландия', five: true },
        { name: 'Хорватия', five: true },
        { name: 'Ирландия', five: true },
        { name: 'Кипр', five: false },
        { name: 'Остров Мэн', five: false },
        { name: 'Чехия', five: true },
        { name: 'Италия', five: true },
        { name: 'Дания', five: false },
        { name: 'Латвия', five: false },
        { name: 'Эстония', five: false },
        { name: 'Литва', five: false },
        { name: 'Франция', five: true },
        { name: 'Мальта', five: true },
        { name: 'Германия', five: true },
        { name: 'Нидерланды', five: true },
        { name: 'Польша', five: true },
        { name: 'Словения', five: true },
        { name: 'Португалия', five: true },
        { name: 'Испания', five: true },
        { name: 'Румыния', five: true },
        { name: 'Швеция', five: true },
        { name: 'Словакия', five: true },
        { name: 'Украина', five: false },
        { name: 'Великобритания', five: true }
    ]
    const additionally: Country[] = [
        { name: 'Гонконг', five: true },
        { name: 'Макао', five: false },
        { name: 'Индонезия', five: false },
        { name: 'Шри-Ланка', five: false },
        { name: 'Турция', five: true },
        { name: 'Вьетнам', five: false }
    ]

    return (
        <div className='w-full h-[1359px] sm:h-auto px-20 sm:px-80 py-40 bg-bg flex flex-col sm:flex-row gap-20'>
            <div className='sm:w-4/5 flex flex-col gap-y-20'>
                <div className='text-28 font-semibold leading-120'>Покрывает не только Европу, но и даже больше</div>
                <div className='text-gray leading-120'>Скорость и покрытие зависят от оператора и доступности сети</div>
                <div className='w-full flex flex-wrap gap-y-10'>
                    {
                        countries.map(c => <Country name={c.name} five={c.five} />)
                    }
                </div>
                <div className='text-gray leading-120'>Дополнительное покрытие</div>
                <div className='w-full flex flex-wrap gap-y-10'>
                    {
                        additionally.map(c => <Country name={c.name} five={c.five} />)
                    }
                </div>
            </div>
            <Europe />
        </div>
    )
}
import Greeting from "./Greeting";

interface esim {
    name: string
    plan: string
    expire: string
    status: boolean
    gbs: string
    additionally: boolean
    activation: boolean
}

export default function MyESIMS({ esims }: { esims: boolean }) {
    let sample: esim[] = [
        {
            name: 'eSIM для Европы',
            plan: '7 дней, 1 ГБ',
            expire: '0 дней',
            status: false,
            gbs: '0 МБ',
            additionally: false,
            activation: false
        },
        {
            name: 'eSIM для Европы',
            plan: '7 дней, 1 ГБ',
            expire: '4 дня',
            status: true,
            gbs: '325 МБ',
            additionally: true,
            activation: false
        }
    ]
    return (
        <div className='w-full flex flex-col gap-20'>
            <Greeting />
            <div className='w-full flex flex-col gap-20 p-20 rounded bg-bg'>
                <div className='text-20 text-orange font-semibold leading-120'>Мои eSIM</div>
                <div className='w-full border border-[#E1E5EC]'></div>
                {
                    esims ? (
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr className='leading-120 border-t-2 border-t-[#E1E5EC]'>
                                    <td className='py-20 px-5'>Наименование</td>
                                    <td>Тариф</td>
                                    <td>Остаток</td>
                                    <td>Статус</td>
                                    <td>Остаток трафика</td>
                                    <td>Доп. трафик</td>
                                    <td>Активация</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sample.map((i, index) => <tr className='leading-120 border-t-2 border-t-[#E1E5EC]' key={index}>
                                        <td className='py-20'>{i.name}</td>
                                        <td>{i.plan}</td>
                                        <td>{i.expire}</td>
                                        <td className={`${i.status ? 'text-green': 'text-red'}`}>{i.status ? 'Работает' : 'Завершено'}</td>
                                        <td>{i.gbs}</td>
                                        <td className='pr-5'><div className={`p-[12px] flex items-center justify-center rounded ${!i.status ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Купить трафик</div></td>
                                        <td><div className={`p-[12px] flex items-center justify-center rounded ${!i.activation ? 'text-gray bg-[#E1E5EC]': 'text-white bg-green'}`}>Активировать</div></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    ) : (    
                        <div className='w-full flex flex-col py-40 gap-10 items-center justify-center'>
                            <img className='w-[53px]' src='images/icons/noesim.svg' alt='noesim' />
                            <div className='text-20 font-semibold leading-120'>У вас нет eSIM</div>
                            <div className='text-center'>
                                <div className='text-gray leading-150'>После покупки все ваши eSIM будут показываться здесь.</div>
                                <div className='text-gray leading-150'>Для активации или пополнения трафика вы можете управлять своими eSIM с помощью этого окна.</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
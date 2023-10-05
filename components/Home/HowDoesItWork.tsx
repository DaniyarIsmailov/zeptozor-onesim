interface StepProps {
    heading: string
    description: string
    justify?: 'start' | 'end'
    additionally?: string
    illustration: string
    width: string
    top: {
        mobile: string,
        desktop: string
    }
}

function Step({ heading, description, justify, additionally, illustration, width, top }: StepProps) {
    return (
        <div className={`w-full pl-[32px] sm:px-[200px] sm:absolute sm:ml-0 flex sm:flex-col items-end ${justify == 'start' ? 'sm:items-start' : 'sm:items-end'} gap-20 `} style={{ marginTop: top.mobile, top: top.desktop }}>
            <div className='w-[230px] sm:w-[280px] flex flex-col gap-10 text-start'>
                <div className='text-20 sm:text-28 font-semibold leading-120'>{heading}</div>
                <div className='text-gray leading-120'>{description}</div>
                <div className='text-blue leading-120'>{additionally}</div>
            </div>
            <img className='sm:w-auto' style={{ width }} src={`images/howdoesitwork/${illustration}.svg`} alt={illustration} />
        </div>
    )
}

export default function HowDoesItWork() {
    const steps: StepProps[] = [
        {
            heading: 'Получите QR-код по электронной почте',
            description: 'Вы получите QR-код и инструкции по активации сразу после оплаты',
            illustration: 'mailbox',
            width: '90px',
            top: {
                mobile: '18px',
                desktop: '0px'
            }
        },
        {
            heading: 'Отсканируйте код',
            description: 'Отсканируйте код с помощью камеры телефона и запустите активацию пакета',
            additionally: 'Посмотреть список поддерживаемых смартфонов',
            illustration: 'woman',
            width: '100px',
            top: {
                mobile: '40px',
                desktop: '300px'
            }
        },
        {
            heading: 'Назначьте сотовые данные',
            description: 'Назначьте сотовые данные с оригинального номера на eSIM',
            illustration: 'man',
            width: '48px',
            top: {
                mobile: '71px',
                desktop: '600px'
            }
        },
        {
            heading: 'Включите данные и наслаждайтесь интернетом',
            description: 'Включите роуминг данных в стране назначения',
            illustration: 'laptopman',
            width: '100px',
            top: {
                mobile: '58px',
                desktop: '850px'
            }
        }
    ]
    return (
        <div className='w-full flex flex-col sm:text-center gap-20 px-20 sm:px-80 py-40'>
            <div className='text-28 sm:text-36 font-semibold leading-120'>Как работает международная eSIM</div>
            <div className='sm:flex sm:mx-auto gap-5 font-semibold leading-120'>
                Перед покупкой убедитесь, что ваш смартфон
                <div className='font-semibold leading-120 text-blue'>поддерживает eSIM</div>
            </div>
            <div className='w-full'>
                <div className='w-full relative sm:h-[1320px]'>
                    <div className='w-0 flex flex-col items-center border border-gray sm:left-1/2 absolute top-[60px] sm:top-[35px] z-10'>
                        <div className='w-[12px] h-[12px] mb-[130px] sm:mb-[300px] bg-orange rounded-full'></div>
                        <div className='w-[12px] h-[12px] mb-[255px] sm:mb-[350px] bg-orange rounded-full'></div>
                        <div className='w-[12px] h-[12px] mb-[178px] sm:mb-[250px] bg-orange rounded-full'></div>
                        <div className='w-[12px] h-[12px] bg-orange rounded-full'></div>
                    </div>
                    {
                        steps.map((step, index) => <Step key={index} heading={step.heading} description={step.description} justify={(index % 2 == 0 ? 'end' : 'start')} additionally={step.additionally} illustration={step.illustration} width={step.width} top={step.top} />)
                    }
                </div>
                <div className='w-[184px] mx-auto mt-40 flex py-[12px] px-[15px] justify-center items-center rounded bg-orange text-white'>Каталог eSIM</div>
            </div>
        </div>
    )
}
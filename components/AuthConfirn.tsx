'use client'

function Digit({ digit }: { digit: number }) {
    return (
        <div className='w-[50px] h-[70px] text-48 font-semibold flex items-center justify-center rounded border-2 border-[#E1E5EC]'>
            <input className='w-full h-full text-center outline-none bg-inherit' />
        </div>
    )
}

export default function AuthConfirm() {
    let digits: number[] = [7, -1, -1, -1, -1, -1]

    return (
        <div className='w-[388px] flex flex-col items-center p-20 rounded bg-bg gap-20'>
            <div className='text-20 font-semibold leading-120'>Войти в Onesim</div>
            <div className='w-full flex flex-col gap-[15px]'>
                <div className='w-full flex flex-col gap-10'>
                    <label className='text-gray text-[10px]'>Логин / Email</label>
                    <label className='text-[14px]'>zeptozor@gmail.com</label>
                </div>
                <div className='text-gray text-[14px] leading-150'>Проверьту почту и введите отправленный пароль</div>
            </div>
            <div className='w-full flex justify-between'>
                {
                    digits.map((d, index) => <Digit key={index} digit={d} />)
                }
            </div>
            <div className='text-gray text-[14px] leading-150'>Отправить код еще раз через 00:30</div>
            <div className='flex w-full h-[40px] p-[12px] items-center justify-center rounded bg-orange text-white'>Войти / Зарегистрироваться</div>
            <div className='text-gray text-[14px] leading-150'>
                Авторизация означает ваше согласие с
                <div className='text-blue text-[14px] text-center leading-150'>Политикой Конфиденциальности</div>
            </div>
        </div>
    )
}
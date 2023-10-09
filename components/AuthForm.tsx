export default function AuthForm() {
    return (
        <div className='w-full sm:w-[388px] flex flex-col items-center p-20 rounded bg-bg gap-20'>
            <div className='text-20 font-semibold leading-120'>Войти / Зарегистрироваться</div>
            <div className='text-gray leading-150'>Быстрый вход</div>
            <div className='flex gap-40'>
                <img className='w-[36px] h-[36px]' src='images/icons/google.svg' alt='google' />
                <img className='w-[36px] h-[36px]' src='images/icons/facebook.svg' alt='facebook' />
                <img className='w-[36px] h-[36px]' src='images/icons/twitter.svg' alt='twitter' />
            </div>
            <div className='w-full flex items-center'>
                <div className='border border-[#E1E5EC] w-full'></div>
                <div className='text-gray mx-[15px]'>Или</div>
                <div className='border border-[#E1E5EC] w-full'></div>
            </div>
            <div className='flex flex-col gap-10'>
                <div className='w-full rounded border-2 border-orange p-[12px] relative flex'>
                    <input className='w-full h-full outline-none peer text-[14px] bg-inherit' placeholder="" />
                    <label className='absolute pointer-events-none text-15 top-auto peer-focus:text-[10px] peer-focus:top-[3px] peer-[&:not(:placeholder-shown)]:top-[3px] peer-[&:not(:placeholder-shown)]:text-[10px]'>Логин / Email</label>
                </div>
                <div className='text-gray text-[14px] text-center leading-150'>Введите вашу почту и получите ссылку с одноразовым кодом. При последующих авторизациях вы будете получать одноразовый код на указанную почту.</div>
            </div>
            <div className='flex w-full h-[40px] p-[12px] items-center justify-center rounded bg-orange text-white'>Войти / Зарегистрироваться</div>
            <div className='text-gray text-[14px] leading-150'>
                Авторизация означает ваше согласие с
                <div className='text-blue text-[14px] leading-150'>Политикой Конфиденциальности</div>
            </div>
        </div>
    )
}
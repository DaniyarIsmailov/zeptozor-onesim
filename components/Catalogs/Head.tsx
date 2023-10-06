import Category from "../Category";
import Loupe from "../svg/Loupe";

export default function Head() {
    return (
        <div className='w-full relative px-20 sm:px-0 sm:pt-40 mb-40'>
            <img className='hidden sm:block absolute left-0 top-0 -z-10' src='images/catalogs/desktop.svg' alt='hello' />
            <img className='sm:hidden absolute left-0 top-0 -z-10' src='images/catalogs/mobile.svg' alt='world' />
            <div className='w-full sm:w-[600px] mx-auto flex flex-col gap-40'>
                <div className='flex flex-col gap-20'>
                    <div className='sm:hidden text-32 font-extrabold'>onesim</div>
                    <div className='text-48 font-semibold leading-110'>Самые популярные eSIM</div>
                </div>
                <div className='flex w-full pr-20 items-center justify-between bg-white rounded border-2 border-[#E1E5EC]'>
                    <input className='outline-none pl-20 rounded text-gray w-[90%] sm:w-[95%] h-[50px]' placeholder='Где вам нужна связь?' />
                    <div className='w-[18px] h-[18px]'>
                        <Loupe fill='gray' />
                    </div>
                </div>
                <div className='flex flex-col gap-20'>
                    <div className='leading-150'>Выберите из списка подходящий вам вариант или смотрите другие разделы</div>
                    <div className='flex w-full flex-col gap-10 sm:flex-row sm:bg-white justify-between'>
                        <Category active={true} category='Самые популярные' />
                        <Category active={false} category='Региональные eSIM' />
                        <Category active={false} category='Локальные eSIMs' />
                    </div>
                </div>
            </div>
        </div>
    )
}
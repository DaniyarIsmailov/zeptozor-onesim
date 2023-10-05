import Link from 'next/link'
import Arrow from './svg/Arrow'
import Loupe from './svg/Loupe'
import Person from './svg/Person'

export default function Nav() {
    return (
        <div className='w-full flex sm:gap-40 px-20 sm:px-80 py-20 items-center justify-center'>
            <div className='hidden sm:flex gap-40 justify-center items-center'>
                <Link className='text-32 font-semibold' href='/'>onesim</Link>
                <div className='flex gap-20 justify-center items-center'>
                    <div className='flex gap-10 items-center justify-center cursor-pointer'>
                        <div className='font-semibold hover:text-blue'>Направления</div>
                        <div className='w-[6px] h-[3px]'>
                            <Arrow />
                        </div>
                    </div>
                    <div className='font-semibold'>Устройства совместимые с eSIM</div>
                    <div className='font-semibold'>FAQ</div>
                </div>
            </div>
            <div className='flex py-[11px] w-full sm:w-auto min-w-[360px] px-20 gap-10 items-center justify-between bg-bg rounded'>
                <input className='w-full text-[14px] font-semibold placeholder-black bg-inherit outline-none' placeholder='Ищите нужную вам страну и регион' />
                <div className='w-[18px] h-[18px]'>
                    <Loupe />
                </div>
            </div>
            <div className='hidden sm:flex gap-20 items-center content-center'>
                <div className='flex gap-20 items-center cursor-pointer'>
                    <div className='w-[16px] h-[18px]'>
                        <Person />
                    </div>
                    <div className='flex gap-10 items-center justify-center'>
                        <div className='font-semibold hover:text-blue'>USD ($)</div>
                        <div className='w-[6px] h-[3px]'>
                            <Arrow />
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 items-center justify-center cursor-pointer'>
                    <div className='font-semibold hover:text-blue'>Русский</div>
                    <div className='w-[6px] h-[3px]'>
                        <Arrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
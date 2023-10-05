export default function Feedback() {
    return (
        <div className='px-20 sm:px-80 pb-40'>
            <div className='w-full h-[438px] sm:h-[253px] relative px-20 sm:px-0 py-40 rounded-10 bg-bg'>
                <div className='hidden sm:flex w-full h-full justify-end absolute top-0'>
                    <img src='images/feedback/feedback.svg' />
                </div>
                <div className='sm:hidden w-full h-full flex pl-10 items-end absolute bottom-0'>
                    <img src='images/feedback/feedbackmobile.svg' />
                </div>
                <div className='text-center text-28 sm:text-36 font-semibold leading-120 mb-10 sm:mb-20'>У вас остались вопросы?</div>
                <div className='text-center leading-120 mb-20 sm:mb-40'>Напишите нам и мы поможем вам с любым вопросом.</div>
                <div className='mx-auto flex w-[311px] sm:w-[391px] py-[17px] px-20 justify-center items-center gap-10 rounded bg-orange'>
                    <div className='w-[18px] h-[16.919px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                            <path d="M19.5 11.8V4.19995V4.19666C19.5 3.07875 19.5 2.51945 19.2822 2.09204C19.0905 1.71572 18.7841 1.40973 18.4078 1.21799C17.98 1 17.4203 1 16.3002 1H4.7002C3.58009 1 3.01962 1 2.5918 1.21799C2.21547 1.40973 1.90973 1.71572 1.71799 2.09204C1.5 2.51986 1.5 3.07985 1.5 4.19995V15.671C1.5 16.7367 1.5 17.2696 1.71846 17.5432C1.90845 17.7813 2.19644 17.9197 2.50098 17.9194C2.85115 17.919 3.26744 17.5861 4.09961 16.9203L5.62357 15.7012C5.94844 15.4413 6.11084 15.3114 6.29172 15.219C6.45219 15.137 6.62279 15.0771 6.79932 15.0408C6.99829 15 7.20652 15 7.62256 15H16.3001C17.4202 15 17.98 15 18.4078 14.782C18.7841 14.5902 19.0905 14.2844 19.2822 13.908C19.5 13.4806 19.5 12.9212 19.5 11.8032V11.8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className='text-white text-center font-semibold'>Написать</div>
                </div>
            </div>
        </div>
    )
}
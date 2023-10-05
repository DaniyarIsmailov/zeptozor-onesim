export default function Method({ icon }: { icon: string }) {
    return (
        <img className='w-[60px] sm:w-[100px] h-[40px] sm:h-[67px]' src={`images/paymentmethods/${icon}.svg`} />
    )
}
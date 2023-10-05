export default function Arrow({ stroke }: { stroke?: string }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6' fill='none'>
            <path className={`stroke-${stroke ? stroke : 'black'}`} d='M7 1.5L4 4.5L1 1.5' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}
function Star({ fill }: { fill: number }) {
    if (fill == 100)
    return (
        <svg height="24" viewBox="0 0 24 24" width="24">
            <defs>
            <linearGradient id="grad2">
                <stop offset="0%" stopColor="#FFA800" />
                <stop offset='100%' stopColor="#FFA800" />
                <stop offset='100' stopColor="#848D9F" />
                <stop offset="100%" stopColor="#848D9F" />
            </linearGradient>            
            </defs>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                fill="url(#grad2)"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    )
    return (
        <svg height="24" viewBox="0 0 24 24" width="24">
            <defs>
            <linearGradient id="grad2">
                <stop offset="0%" stopColor="#FFA800" />
                <stop offset='0%' stopColor="#FFA800" />
                <stop offset='0%' stopColor="#848D9F" />
                <stop offset="100%" stopColor="#848D9F" />
            </linearGradient>            
            </defs>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                fill="848D9F"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    )
}

export default function Rate({ rate }: { rate: number }) {
    return (
        <div className='w-[153px] h-[18.741px] flex gap-[10px]'>
            <div className='w-[119.654px] h-full flex'>
                {
                    [1, 2, 3, 4, 5].map(i => <Star key={i} fill={i <= rate ? 100 : 0} />)
                }
            </div>
            <div>{ (rate / 1).toFixed(1) }</div>
        </div>
    )
}
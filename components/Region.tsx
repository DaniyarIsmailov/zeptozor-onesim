export default function Region({ region, categories, forRegion, price }: { region: string, categories:  string[], forRegion: string, price: string }) {
    let category = ''
    categories.forEach(c => category += `${c} eSIM, `)
    category = category.trim()
    category = category.slice(0, -1)
    return (
        <div className='inline-flex flex-col gap-20 rounded'>
            <div className={`flex flex-col justify-end w-[287px] h-[190px] rounded`}>
                <div className='font-[700] uppercase'>onesim for</div>
                <div className='font-[700] uppercase text-[40px] leading-[40px]'>{ region }</div>
            </div>
            <div className='flex flex-col gap-[5px]'>
                <div className='font-semibold h-[20px]'>eSIM для {forRegion}</div>
                <div className='text-[#848D9F]'>{category}</div>
                <div className='text-[#0075FF] font-semibold'>{price}</div>
            </div>
        </div>
    )
}
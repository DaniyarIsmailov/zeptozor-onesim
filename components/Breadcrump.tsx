export default function Breadcrump({ crumps }: { crumps: string[] }) {
    return (
        <div className='w-full flex-wrap h-[16px] px-20 sm:px-80 flex gap-10 mb-20'>
            {
                crumps.map((i, index) => {
                    return (
                        <>
                            <span className={index != crumps.length - 1 ? 'text-gray' : ''} key={index}>{i}</span>
                            <span>{index != crumps.length - 1 && (<span className='text-gray'>&gt;</span>)}</span>
                        </>
                    )
                })
            }
        </div>
    )
}
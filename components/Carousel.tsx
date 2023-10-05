export default function Carousel({ items }: { items: React.ReactNode[] }) {
    return (
        <div className='pl-[20px] sm:pl-[80px] mt-[20px]'>
            <div className='w-full overflow-scroll snap-x snap-mandatory flex gap-[20px]'>
                {
                    items.map((i, index) => i)
                }
            </div>
        </div>
    )
}
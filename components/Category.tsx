export default function Category({ active, category }: { active: boolean, category: string }) {
    return (
        <div className={`flex p-[12px] justify-center items-center cursor-pointer rounded ${ active ? 'bg-orange' : 'bg-bg sm:bg-inherit' }`}>
            <div className={`text-center ${ active ? 'text-white' : '' }`}>{ category }</div>
        </div>
    )
}
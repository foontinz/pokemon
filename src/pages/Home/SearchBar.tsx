import Icon from "@/components/ui/Icon"

type SearchBarProps = {}

function SearchBar({}: SearchBarProps) {
    return (
        <div className="w-full md:w-[600px] h-[3rem] lg:h-[4rem] rounded-[25px] shadow-md bg-gray flex items-center justify-between gap-4 lg:px-4 px-6">
            <Icon name="Search" size="small" />

            <input className="bg-white w-full lg:w-[520px] h-[2rem] lg:h-[2.5rem] text-left px-4 rounded-[25px] font-glory text-lg"></input>
        </div>
    )
}

export default SearchBar

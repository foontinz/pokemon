import Container from "@/components/ui/Container"
import Icon from "@/components/ui/Icon"

type SearchBarProps = {}

function SearchBar({}: SearchBarProps) {
    return (
        <Container className="flex justify-center">
            <div className="w-full md:w-[600px] h-[80px] rounded-[25px] shadow-md bg-gray flex items-center justify-between gap-4 lg:px-4 px-6">
                <Icon name="Search" size="medium" />
                <input className="bg-white w-full lg:w-[520px] h-[50px] text-center rounded-[25px] px-4 font-glory text-lg"></input>
            </div>
        </Container>
    )
}

export default SearchBar

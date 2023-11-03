import SearchBar from "@/pages/Home/SearchBar.tsx"
import ResultsGrid from "@/pages/Home/ResultsGrid.tsx"
import { PokeCardProps } from "@/components/PokeCard/index"

import _data from "@/data/pokemons.json"
import Container from "@/components/ui/Container"

const data = _data as PokeCardProps[]

function Home({}) {
    return (
        <>
            <Container className="flex flex-col gap-[2rem] p-8">
                <header className="w-full flex justify-center">
                    <SearchBar />
                </header>
                <ResultsGrid pokeResults={data} />
            </Container>
        </>
    )
}

export default Home

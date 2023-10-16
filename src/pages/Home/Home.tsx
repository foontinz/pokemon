import SearchBar from "@/pages/Home/SearchBar.tsx"
import ResultsGrid from "@/pages/Home/ResultsGrid.tsx"
import { PokeCardProps } from "@/components/PokeCard/PokeCard.tsx"

import _data from "@/data/pokemons.json"

const data = _data as PokeCardProps[]

function Home({}) {
    return (
        <>
            <SearchBar />
            <ResultsGrid pokeResults={data} />
        </>
    )
}

export default Home

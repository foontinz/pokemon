import { PokeCard, PokeCardProps } from "@/components/PokeCard/index"

export interface ResultsGridProps {
    pokeResults: PokeCardProps[]
}

function ResultsGrid({ pokeResults }: ResultsGridProps) {
    return (
        <section
            className={
                "grid gap-10 place-items-center grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]"
            }
        >
            {pokeResults.map((pokemon, idx) => (
                <PokeCard key={idx} {...pokemon} />
            ))}
        </section>
    )
}

export default ResultsGrid

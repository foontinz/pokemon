import { PokeCard, PokeCardProps } from "@/components/PokeCard/PokeCard.tsx"

export interface ResultsGridProps {
    pokeResults: PokeCardProps[]
}

function ResultsGrid({ pokeResults }: ResultsGridProps) {
    return (
        <section
            className={
                "grid gap-6 place-items-center grid-cols-[repeat(auto-fill,minmax(220px,1fr))]"
            }
        >
            {pokeResults.map((pokemon, idx) => (
                <PokeCard key={idx} {...pokemon} />
            ))}
        </section>
    )
}

export default ResultsGrid

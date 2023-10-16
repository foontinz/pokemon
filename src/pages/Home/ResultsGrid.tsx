import { PokeCard, PokeCardProps } from "@/components/PokeCard/PokeCard.tsx"
import Container from "@/components/ui/Container"

export interface ResultsGridProps {
    pokeResults: PokeCardProps[]
}

function ResultsGrid({ pokeResults }: ResultsGridProps) {
    return (
        <Container>
            <section
                className={
                    "grid gap-6 place-items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
                }
            >
                {pokeResults.map((pokemon, idx) => (
                    <PokeCard key={idx} {...pokemon} />
                ))}
            </section>
        </Container>
    )
}

export default ResultsGrid

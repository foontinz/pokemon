import {PokeCard, PokeCardProps} from "../../components/PokeCard/PokeCard.tsx";


export interface ResultsGridProps{
    pokeResults: PokeCardProps[]
}

function ResultsGrid({pokeResults}: ResultsGridProps) {
    return (
        <section className={"grid gap-4 grid-cols-3"}>
            {pokeResults.map(pokemon => (
                <PokeCard {...pokemon}/>
            ))}
        </section>
    );
}

export default ResultsGrid;
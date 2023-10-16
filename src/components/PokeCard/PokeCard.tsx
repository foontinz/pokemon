import PokeMedia from "./PokeMedia.tsx"
import PokeName from "./PokeName.tsx"
import PokeTypes from "./PokeTypes.tsx"

export interface PokeCardProps {
    id: number
    imgURL: string
    gifURL: string | null
    name: string
    types: string[]
}

export function PokeCard({ imgURL, gifURL, name, types }: PokeCardProps) {
    return (
        <div className={"flex flex-col justify-center items-center w-[250px] h-[165px]"}>
            <PokeMedia imgURL={imgURL} gifURL={gifURL} />
            <PokeName name={name} />
            <PokeTypes types={types} />
        </div>
    )
}

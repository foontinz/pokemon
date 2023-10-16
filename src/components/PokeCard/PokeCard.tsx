import Card from "@/components/ui/Card.tsx"
import PokeMedia from "@/components/PokeCard/PokeMedia.tsx"
import PokeName from "@/components/PokeCard/PokeName.tsx"
import PokeTypes from "@/components/PokeCard/PokeTypes.tsx"

export interface PokeCardProps {
    id: number
    imgURL: string
    gifURL: string | null
    name: string
    types: string[]
}

export function PokeCard({ imgURL, gifURL, name, types }: PokeCardProps) {
    return (
        <Card className="flex justify-center items-center gap-4">
            <div className="flex flex-col w-[60%] justify-center items-center gap-4">
                <PokeMedia imgURL={imgURL} gifURL={gifURL} />
                <PokeName name={name} />
            </div>
            <div className="flex flex-col items-start h-full py-4">
                <PokeTypes types={types} />
            </div>
        </Card>
    )
}

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
        <Card className="flex justify-between py-6 flex-col w-full items-center">
            <PokeTypes types={types} />
            <div className="flex flex-col gap-6">
                <PokeMedia imgURL={imgURL} gifURL={gifURL} />
                <PokeName name={name} />
            </div>
        </Card>
    )
}

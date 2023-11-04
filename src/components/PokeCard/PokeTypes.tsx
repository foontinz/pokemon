import Bar from "@/components/ui/Bar" // Import Bar and BarProps

type PokeTypesProps = {
    types: string[]
}

type ColorVariants = {
    [key: string]: string
}

const colorVariants: ColorVariants = {
    bug: "bg-pokemon-bug",
    dark: "bg-pokemon-dark",
    dragon: "bg-pokemon-dragon",
    electric: "bg-pokemon-electric",
    fairy: "bg-pokemon-fairy",
    fighting: "bg-pokemon-fighting",
    fire: "bg-pokemon-fire",
    flying: "bg-pokemon-flying",
    ghost: "bg-pokemon-ghost",
    grass: "bg-pokemon-grass",
    ground: "bg-pokemon-ground",
    ice: "bg-pokemon-ice",
    normal: "bg-pokemon-normal",
    poison: "bg-pokemon-poison",
    psychic: "bg-pokemon-psychic",
    rock: "bg-pokemon-rock",
    steel: "bg-pokemon-steel",
    water: "bg-pokemon-water",
}

type SizeTypeConfigItem = {
    size: "full" | "half" | "third"
    type: "main" | "left" | "center" | "right"
}

type SizeTypeConfig = {
    [key: number]: SizeTypeConfigItem[]
}

const sizeTypeConfig: SizeTypeConfig = {
    1: [{ size: "full", type: "main" }],
    2: [
        { size: "half", type: "left" },
        { size: "half", type: "right" },
    ],
    3: [
        { size: "third", type: "left" },
        { size: "third", type: "center" },
        { size: "third", type: "right" },
    ],
}

function PokeTypes({ types }: PokeTypesProps) {
    const bars = sizeTypeConfig[types.length].map((config, index) => (
        <Bar
            key={index}
            text={types[index]}
            size={config.size}
            type={config.type}
            className={colorVariants[types[index]]}
        />
    ))

    return <div className={`w-[10rem] flex gap-1`}>{bars}</div>
}

export default PokeTypes

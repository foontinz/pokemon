type PokeTypesProps = {
    types: string[]
}

function PokeTypes({ types }: PokeTypesProps) {
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

    switch (types.length) {
        case 1:
            return (
                <div
                    className={`w-[10rem] h-[2.5rem] rounded-[25px] shadow-md flex justify-center items-center ${
                        colorVariants[types[0]]
                    }`}
                >
                    <p className="text-white">{types[0]}</p>
                </div>
            )
        case 2:
            return (
                <div className="w-[10rem] h-[2.5rem] bg-transparent flex justify-center items-center gap-1">
                    <div
                        className={`flex w-[50%] h-full justify-center shadow-md rounded-tl-[25px] rounded-bl-[25px] items-center ${
                            colorVariants[types[0]]
                        }`}
                    >
                        <p className="text-white">{types[0]}</p>
                    </div>
                    <div
                        className={`flex w-[50%] h-full justify-center shadow-md rounded-tr-[25px] rounded-br-[25px] items-center ${
                            colorVariants[types[1]]
                        }`}
                    >
                        <p className="text-white">{types[1]}</p>
                    </div>
                </div>
            )
        case 3:
            return (
                <div className="w-[10rem] h-[2.5rem] bg-transparent flex justify-center items-center gap-1">
                    <div
                        className={`flex w-[33%] h-full justify-center shadow-md rounded-tl-[25px] rounded-bl-[25px] items-center ${
                            colorVariants[types[0]]
                        }`}
                    >
                        <p className="text-white">{types[0]}</p>
                    </div>
                    <div
                        className={`flex w-[33%] h-full justify-center shadow-md items-center ${
                            colorVariants[types[1]]
                        }`}
                    >
                        <p className="text-white">{types[1]}</p>
                    </div>
                    <div
                        className={`flex w-[33%] h-full justify-center shadow-md rounded-tr-[25px] rounded-br-[25px] items-center ${
                            colorVariants[types[2]]
                        }`}
                    >
                        <p className="text-white">{types[2]}</p>
                    </div>
                </div>
            )
    }
}

export default PokeTypes

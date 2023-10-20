type PokeTypesProps = {
    types: string[]
}

function PokeTypes({ types }: PokeTypesProps) {
    switch (types.length) {
        case 1:
            return (
                <div
                    className={`w-[10rem] h-[2.5rem] rounded-[25px] shadow-md flex justify-center items-center bg-pokemon-${types[0]}`}
                >
                    <p className="text-white">{types[0]}</p>
                </div>
            )
        case 2:
            return (
                <div className="w-[10rem] h-[2.5rem] bg-transparent flex justify-center items-center gap-1">
                    <div
                        className={`flex w-[50%] h-full justify-center shadow-md rounded-tl-[25px] rounded-bl-[25px] items-center bg-pokemon-${types[0]}`}
                    >
                        <p className="text-white">{types[0]}</p>
                    </div>
                    <div
                        className={`flex w-[50%] h-full justify-center shadow-md rounded-tr-[25px] rounded-br-[25px] items-center bg-pokemon-${types[1]}`}
                    >
                        <p className="text-white">{types[1]}</p>
                    </div>
                </div>
            )
        case 3:
            return (
                <div className="w-[10rem] h-[2.5rem] bg-transparent flex justify-center items-center gap-1">
                    <div
                        className={`flex w-[33%] h-full justify-center shadow-md rounded-tl-[25px] rounded-bl-[25px] items-center bg-pokemon-${types[0]}`}
                    >
                        <p className="text-white">{types[0]}</p>
                    </div>
                    <div
                        className={`flex w-[33%] h-full justify-center shadow-md items-center bg-pokemon-${types[1]}`}
                    >
                        <p className="text-white">{types[1]}</p>
                    </div>
                    <div
                        className={`flex w-[33%] h-full justify-center shadow-md rounded-tr-[25px] rounded-br-[25px] items-center bg-pokemon-${types[2]}`}
                    >
                        <p className="text-white">{types[2]}</p>
                    </div>
                </div>
            )
    }
}

export default PokeTypes

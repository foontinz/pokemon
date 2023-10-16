type PokeTypesProps = {
    types: string[]
}

function PokeTypes({ types }: PokeTypesProps) {
    return (
        <>
            {types.map((type, idx) => (
                <p className="font-glory text-brown" key={idx}>{type}</p>
            ))}
        </>
    )
}

export default PokeTypes

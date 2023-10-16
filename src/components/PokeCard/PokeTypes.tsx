type PokeTypesProps = {
    types: string[]
}

function PokeTypes({ types }: PokeTypesProps) {
    return (
        <>
            {types.map((type, idx) => (
                <p key={idx}>{type}</p>
            ))}
        </>
    )
}

export default PokeTypes

type PokeTypesProps = {
    types: string[]
}

function PokeTypes({types}: PokeTypesProps) {
    return (
        <>
            {types.map(type => (
                <p>{type}</p>
            ))}
        </>
    );
}

export default PokeTypes;
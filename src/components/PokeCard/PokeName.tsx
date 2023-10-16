type PokeNameProps = {
    name: string
}

function PokeName({name}: PokeNameProps) {
    return (
        <span>{name}</span>
    );
}

export default PokeName;
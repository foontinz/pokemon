type PokeNameProps = {
    name: string
}

function PokeName({name}: PokeNameProps) {
    return (
        <span className="flex justify-center">{name}</span>
    );
}

export default PokeName;
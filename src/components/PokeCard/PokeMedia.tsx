type PokeMediaProps = {
    imgURL: string
    gifURL: string | null
}

function PokeMedia({imgURL, gifURL}: PokeMediaProps) {
    return (
        <div>
            <img src={gifURL ? gifURL : imgURL} alt={"Pokemon media"}/>
        </div>
    );
}

export default PokeMedia;
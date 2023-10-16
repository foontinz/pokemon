import Image from "@/components/ui/Image"

type PokeMediaProps = {
    imgURL: string
    gifURL: string | null
}

function PokeMedia({ imgURL, gifURL }: PokeMediaProps) {
    return (
        <div>
            <Image
                variant="square"
                url={gifURL ? gifURL : imgURL}
                alt={"Pokemon media"}
            />
        </div>
    )
}

export default PokeMedia

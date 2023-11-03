import Card from "@/components/ui/Card.tsx"
import PokeMedia from "@/components/PokeCard/PokeMedia.tsx"
import PokeName from "@/components/PokeCard/PokeName.tsx"
import PokeTypes from "@/components/PokeCard/PokeTypes.tsx"
import Modal from "@/components/PokeModal/index"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export interface PokeCardProps {
    id: number
    imgURL: string
    gifURL: string | null
    name: string
    types: string[]
}

export function PokeCard({ imgURL, gifURL, name, types, id }: PokeCardProps) {
    const [showModal, setShowModal] = useState<boolean>(false)

    const close = () => setShowModal(false)
    const open = () => setShowModal(true)

    useEffect(() => {
        showModal
            ? (document.body.style.overflow = "hidden") // hide body scroll if modal is opened
            : (document.body.style.overflow = "auto") // show body scroll if modal is closed
    }, [showModal])

    return (
        <Card
            onClick={open}
            className="cursor-pointer flex justify-between py-6 flex-col w-full items-center"
        >
            <PokeTypes types={types} />
            <div className="flex flex-col gap-6">
                <PokeMedia imgURL={imgURL} gifURL={gifURL} />
                <PokeName name={name} />
            </div>
            <AnimatePresence>
                {showModal && <Modal pokeId={id} handleClose={close} />}
            </AnimatePresence>
        </Card>
    )
}

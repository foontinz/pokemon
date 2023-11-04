import { motion } from "framer-motion"
import Backdrop from "@/components/Backdrop/index"
import Card from "@/components/ui/Card"
import PokeMedia from "@/components/PokeCard/PokeMedia"
import PokeName from "@/components/PokeCard/PokeName"
import PokeTypes from "@/components/PokeCard/PokeTypes"
import { PokeCardProps } from "@/components/PokeCard"
import pokemons from "@/data/pokemons.json"

export interface ModalProps {
    handleClose: () => void
    pokeId: number
}

function Modal({ handleClose, pokeId }: ModalProps) {
    const data: PokeCardProps = pokemons.find((pokemon) => pokeId == pokemon.id) ?? pokemons[0]

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                className="flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <Card
                    size="verticalModal"
                    className="cursor-pointer flex justify-between py-6 flex-col items-center"
                >
                    <PokeTypes types={data.types} />
                    <div className="flex flex-col gap-6">
                        <PokeMedia imgURL={data.imgURL} gifURL={data.gifURL} />
                        <PokeName name={data.name} />
                    </div>
                </Card>
                <button className="text-white" onClick={handleClose}>
                    Close
                </button>
            </motion.div>
        </Backdrop>
    )
}

export default Modal

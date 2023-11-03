import { motion } from "framer-motion"
import Backdrop from "@/components/Backdrop/index"

export interface ModalProps {
    handleClose: () => void
    pokeId?: string | number
}

function Modal({ handleClose, pokeId }: ModalProps) {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                className="w-[90%] h-20 md:w-[70%] lg:w-[50%] m-auto p-2 rounded-lg flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <p className="text-white">{pokeId}</p>
                <button className="bg-white" onClick={handleClose}>
                    Close
                </button>
            </motion.div>
        </Backdrop>
    )
}

export default Modal

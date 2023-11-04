import { ReactNode } from "react"
import { motion } from "framer-motion"

export interface BackdropProps {
    children: ReactNode
    onClick: () => void
}

function Backdrop({ children, onClick }: BackdropProps) {
    return (
        <motion.div
            onClick={onClick}
            className="fixed top-0 left-0 w-full h-full z-[100] cursor-default bg-black/60 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop

import { VariantProps, cva } from "class-variance-authority"

const cardVariants = cva("card", {
    variants: {
        variant: {
            default: "bg-gray rounded-lg shadow-md font-glory",
        },
        size: {
            vertical: "w-[16rem] h-[22rem] md:w-[16rem] md:h-[22rem]",
            verticalModal: "w-[18rem] h-[26rem] md:w-[24rem] md:h-[34rem]",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "vertical",
    },
})

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {}

function Card({ className, variant, size, children, ...props }: CardProps) {
    return (
        <div className={cardVariants({ className, variant, size })} {...props}>
            {children}
        </div>
    )
}

export default Card

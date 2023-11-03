import { VariantProps, cva } from "class-variance-authority"

const cardVariants = cva("card", {
    variants: {
        variant: {
            default: "bg-gray rounded-lg shadow-md font-glory",
        },
        size: {
            vertical: "w-[12rem] h-[18rem]",
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

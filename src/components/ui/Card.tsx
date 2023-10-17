import { VariantProps, cva } from "class-variance-authority"

const cardVariants = cva("card", {
    variants: {
        variant: {
            default: "bg-gray rounded-lg shadow-md font-glory",
        },
        size: {
            medium: "w-[265px] h-[165px]",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "medium",
    },
})

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {}

function Card({ className, variant, size, children }: CardProps) {
    return (
        <div className={cardVariants({ className, variant, size })}>
            {children}
        </div>
    )
}

export default Card

import { VariantProps, cva } from "class-variance-authority"

const barVariants = cva("bar", {
    variants: {
        variant: {
            default: "h-[2.5rem] shadow-md text-white",
        },
        type: {
            main: "rounded-[25px]",
            left: "rounded-tl-[25px] rounded-bl-[25px]",
            center: "rounded-none",
            right: "rounded-tr-[25px] rounded-br-[25px]",
        },
        size: {
            full: "w-[100%]",
            half: "w-[50%]",
            third: "w-[33%]",
        },
    },
    defaultVariants: {
        variant: "default",
        type: "left",
        size: "full",
    },
})

export interface BarProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof barVariants> {
    className?: string
    text?: string
}

function Bar({ className, variant, type, size, text }: BarProps) {
    return (
        <div className={barVariants({ className, variant, type, size })}>
            <p className="h-full flex items-center justify-center">{text}</p>
        </div>
    )
}

export default Bar

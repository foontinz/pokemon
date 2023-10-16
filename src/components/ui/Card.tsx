import { VariantProps, cva } from "class-variance-authority"

const iconVariants = cva("icon", {
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

export interface IconProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof iconVariants> {}

function Icon({ className, variant, size, children }: IconProps) {
    return (
        <div className={iconVariants({ className, variant, size })}>
            {children}
        </div>
    )
}

export default Icon

import { VariantProps, cva } from "class-variance-authority"

const iconVariants = cva("icon", {
    variants: {
        variant: {
            default: "text-black",
        },
        size: {
            tiny: "w-[1rem] h-[1rem]",
            small: "w-[1.75rem] h-[1.75rem]",
            medium: "w-[2rem]",
            large: "w-[3rem] h-[3rem]",
            xlarge: "w-[5rem] h-[5rem]",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "medium",
    },
})

export interface IconProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof iconVariants> {
    name: string
}

function Icon({ className, variant, size, name }: IconProps) {
    const baseURL = "src/"
    const iconSrc = `${baseURL}assets/icons/${name}.svg`

    return (
        <img
            className={iconVariants({ className, variant, size })}
            src={iconSrc}
        />
    )
}

export default Icon

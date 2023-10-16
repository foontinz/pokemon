import { VariantProps, cva } from "class-variance-authority"

const ImageVariants = cva("icon", {
    variants: {
        variant: {
            fullScreen: "w-full h-full",
            square: "h-[100px] w-[100px] object-cover",
            rectangle: "w-[230px] h-auto overflow-hidden",
        },
    },
    defaultVariants: {
        variant: "square",
    },
})

export interface ImageProps
    extends React.HTMLAttributes<HTMLImageElement>,
        VariantProps<typeof ImageVariants> {
    url: string
    alt: string
}

function Image({ url, alt, variant }: ImageProps) {
    return <img className={ImageVariants({ variant })} src={url} alt={alt} />
}

export default Image

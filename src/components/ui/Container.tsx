import React, { ReactNode } from "react"

export interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
    return (
        <div className={`max-w-6xl mx-auto p-4 ${className}`}>{children}</div>
    )
}

export default Container

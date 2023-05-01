interface GridProps {
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number
    children: any
}

export default function Grid(props: GridProps) {
    return (
        <div className={`
            grid grid-cols-${props.cols ?? 1}
            ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
            ${props.md ? `md:grid-cols-${props.md}` : ''}
            ${props.lg ? `lg:grid-cols-${props.lg}` : ''}
            ${props.xl ? `xl:grid-cols-${props.xl}` : ''}
            ${props.xl2 ? `2xl:grid-cols-${props.xl2}` : ''}
            gap-4 w-full
        `}>
            {props.children}
        </div>
    )
}
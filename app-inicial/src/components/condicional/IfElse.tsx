interface IfElseProps {
    teste: boolean
    children: any
}

export default function IfElse(props: IfElseProps) {
    if (props.teste) {
        return props.children[0]
    } else {
        return props.children[1]
    }
}
import If from './If'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

interface PerguntaProps {
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <div
            className={`
            border border-zinc-600 rounded-md overflow-hidden
        `}
        >
            <div className="bg-zinc-800 p-5 cursor-pointer select-none flex justify-between" onClick={() => props.alternarVisibilidade(props.indice)}>
                <span>{props.texto}</span>
                {props.aberta ? <IconChevronDown /> : <IconChevronUp />}
                {/* <IfElse teste={aberta}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse> */}
            </div>
            <If teste={props.aberta}>
                <div className="p-5">{props.resposta}</div>
            </If>
        </div>
    )
}

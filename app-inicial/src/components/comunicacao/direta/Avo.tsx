import Pai from './Pai'

interface AvoProps {
    nome: string
    sobrenome: string
}

export default function Avo(props: AvoProps) {
    return (
        <div
            className={`
            flex flex-col gap-5 p-5 rounded-md
            bg-purple-500 text-white border border-white
        `}
        >
            <div className='flex justify-center gap-2 text-2xl'>
                <span className='font-black'>Avô</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className='flex gap-5'>
                <Pai nome="João" sobrenome={props.sobrenome} />
                <Pai nome="Pedro" sobrenome={props.sobrenome} />
                <Pai nome="Jaime" sobrenome={props.sobrenome} />
            </div>
        </div>
    )
}

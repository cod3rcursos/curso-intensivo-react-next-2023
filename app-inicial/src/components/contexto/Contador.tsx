import ContadorContext from '@/data/contexts/ContadorContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function Contador() {
    const { numero, incrementar, decrementar } = useContext(ContadorContext)

    return (
        <div className="flex flex-col items-center gap-5">
            <span className="text-6xl font-black">{numero}</span>
            <div className="flex gap-5">
                <button className="botao" onClick={decrementar}>
                    -1
                </button>
                <button className="botao" onClick={incrementar}>
                    +1
                </button>
            </div>
            <Link href="/">
                <span>Voltar</span>
            </Link>
        </div>
    )
}

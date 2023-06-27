import Carrinho from '@/components/listas/Carrinho'
import ListaProdutos from '@/components/listas/ListaProdutos'
import produtos from '@/constants/produtos'
import CarrinhoContext from '@/data/contexts/CarrinhoContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function PaginaProdutos() {
    const {itens, adicionarProduto} = useContext(CarrinhoContext)

    return (
        <div
            className={`
                flex flex-col gap-10 justify-center items-center h-screen
            `}
        >
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
            <Link href="/">Voltar</Link>
        </div>
    )
}

import Produto from '@/model/Produto'
import ProdutoItem from './ProdutoItem'

interface ListaProdutosProps {
    produtos: Produto[]
    comprar: (produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutosProps) {
    return (
        <div className='flex flex-wrap gap-5'>
            {props.produtos.map((produto) => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar} />
            })}
        </div>
    )
}

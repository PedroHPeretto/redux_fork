import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favorito={favoritos.find((p) => p.id === produto.id)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { RootReducer, store } from './store'
import { Provider, useSelector } from 'react-redux'
import { Produto } from './components/Produto/styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const produtos = useSelector((state: RootReducer) => state.carrinho.itens)
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports').then((res) =>
      res.json()
    )
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} favoritos={favoritos} />
      </div>
    </Provider>
  )
}

export default App

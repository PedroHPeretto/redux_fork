import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoIndex = state.itens.findIndex(
        (item) => item.id === produto.id
      )

      if (produtoIndex !== -1) {
        state.itens.splice(produtoIndex, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { toggleFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer

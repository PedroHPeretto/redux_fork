import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './favoritosSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

import { configureStore } from '@reduxjs/toolkit'

import tarefasReducers from './reducers/tarefas'
import filtroReducer from './reducers/filtro'
import { fileURLToPath } from 'url'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducers,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

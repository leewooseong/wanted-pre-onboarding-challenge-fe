import { configureStore } from '@reduxjs/toolkit'

import search from './search'

export const store = configureStore({
  reducer: {
    search,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

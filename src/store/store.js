import { configureStore } from '@reduxjs/toolkit'
import songsListSlice from './songsListSlice/songsListSlice'

export const store = configureStore({
  reducer: {
    songsListSlice,
  },
})
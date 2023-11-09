import { configureStore } from '@reduxjs/toolkit'
import memberReducer from './Slices/AddMember/AddMember'

export const store = configureStore({
  reducer: {
    AddMember: memberReducer,
  },
})

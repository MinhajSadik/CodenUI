import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './feature/userSlice.js'

export const store = configureStore({
    reducer: {
        user: UserReducer
    }
})

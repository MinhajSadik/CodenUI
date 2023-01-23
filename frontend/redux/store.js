import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './store'

export const store = configureStore({
    reducer: {
        user: UserReducer
    }
})
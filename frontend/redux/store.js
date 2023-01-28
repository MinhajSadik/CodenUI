import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './feature/categorySlice'
import ProductReducer from './feature/productSlice'
import UserReducer from './feature/userSlice'

export const store = configureStore({
    reducer: {
        user: UserReducer,
        product: ProductReducer,
        category: CategoryReducer,
    }
})

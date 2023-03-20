import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './feature/categorySlice'
import ProductReducer from './feature/productSlice'
import TechReducer from './feature/techSlice'
import UserReducer from './feature/userSlice'

export const store = configureStore({
    reducer: {
        tech: TechReducer,
        user: UserReducer,
        product: ProductReducer,
        category: CategoryReducer,
    }
})

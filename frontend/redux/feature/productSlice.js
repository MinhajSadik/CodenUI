import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productService from '../../services/productService';


export const findProducts = createAsyncThunk(
    "product/all",
    async (_, { rejectWithValue }) => {
        try {
            const { products } = await productService.findProducts()
            return products
        } catch (error) {
            console.log({ error })
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: "product",

    initialState: {
        product: {},
        products: [],
        loading: false,
        error: ""
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(findProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(findProducts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
            })
            .addCase(findProducts.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer
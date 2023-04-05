import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productService from '../../services/productService';


export const allProducts = createAsyncThunk(
    "product/all",
    async (_, { rejectWithValue }) => {
        try {
            return await productService.findProducts()
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const createProduct = createAsyncThunk(
    "product/create",
    async (productInfo, { rejectWithValue }) => {
        try {
            return await productService.createProduct(productInfo)
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

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
            .addCase(allProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(allProducts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
            })
            .addCase(allProducts.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
            .addCase(createProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(createProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
            })
            .addCase(createProduct.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryService from '../../services/categoryService';


export const findCategories = createAsyncThunk(
    "category/all",
    async (_, { rejectWithValue }) => {
        try {
            const { categories } = await categoryService.findCategories()
            return categories
        } catch (error) {
            console.log({ error })
            return rejectWithValue(error.message);
        }
    }
);

const categorySlice = createSlice({
    name: "category",

    initialState: {
        category: {},
        categories: [],
        loading: false,
        error: ""
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(findCategories.pending, (state) => {
                state.loading = true
            })
            .addCase(findCategories.fulfilled, (state, { payload }) => {
                state.loading = false
                state.categories = payload
            })
            .addCase(findCategories.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })

    }
})

export const { } = categorySlice.actions;

export default categorySlice.reducer
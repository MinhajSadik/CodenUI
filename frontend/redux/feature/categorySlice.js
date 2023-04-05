import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryService from '../../services/categoryService';


export const allCategories = createAsyncThunk(
    "category/all",
    async (_, { rejectWithValue }) => {
        try {
            return await categoryService.findCategories()
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const findCategoryByName = createAsyncThunk(
    "category/getOne/:categoryName",
    async (categoryName, { rejectWithValue }) => {
        try {
            return await categoryService.findCategoryByName(categoryName)
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


const categorySlice = createSlice({
    name: "category",

    initialState: {
        category: {},
        categories: [],
        categoryProducts: [],
        loading: false,
        success: "",
        error: "",
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(allCategories.pending, (state) => {
                state.loading = true
            })
            .addCase(allCategories.fulfilled, (state, { payload }) => {
                state.loading = false
                state.categories = payload.categories
            })
            .addCase(allCategories.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
            .addCase(findCategoryByName.pending, (state) => {
                state.loading = true
            })
            .addCase(findCategoryByName.fulfilled, (state, { payload }) => {
                state.loading = false
                state.categoryProducts = payload
            })
            .addCase(findCategoryByName.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })

    }
})

export const { } = categorySlice.actions;

export default categorySlice.reducer
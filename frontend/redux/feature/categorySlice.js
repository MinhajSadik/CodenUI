import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryService from '../../services/categoryService';


export const findCategories = createAsyncThunk(
    "category/all",
    async (_, { rejectWithValue }) => {
        try {
            const { categories } = await categoryService.findCategories()
            return categories
        } catch (error) {
            console.log(error.response.data.message)
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
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
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
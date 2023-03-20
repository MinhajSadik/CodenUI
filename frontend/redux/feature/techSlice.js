import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import techService from '../../services/techService';


export const findTeches = createAsyncThunk(
    "tech/all",
    async (_, { rejectWithValue }) => {
        try {
            return await techService.findTeches()
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const createTech = createAsyncThunk(
    "tech/create",
    async (techInfo, { rejectWithValue }) => {
        try {
            return await techService.createTech(techInfo)
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

const productSlice = createSlice({
    name: "tech",

    initialState: {
        tech: {},
        teches: [],
        loading: false,
        error: ""
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(findTeches.pending, (state) => {
                state.loading = true
            })
            .addCase(findTeches.fulfilled, (state, { payload }) => {
                state.loading = false
                state.teches = payload.teches
            })
            .addCase(findTeches.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
            .addCase(createTech.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(createTech.fulfilled, (state, { payload }) => {
                state.loading = false
                state.teches = payload
            })
            .addCase(createTech.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
    }
})

export const { } = productSlice.actions;

export default productSlice.reducer
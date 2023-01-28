import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const loginUser = createAsyncThunk(
    // "user/login",
    // async (loginInfo, { rejectWithValue }) => {
    //     try {
    //         const { user } = await userService.login(loginInfo);
    //         return user
    //     } catch (error) {
    //         console.log({ error })
    //         return rejectWithValue(error.message);
    //     }
    // }
);

export const registerUser = createAsyncThunk(
    // "user/register",
    // async (registerInfo, { rejectWithValue }) => {
    //     try {
    //         const { user } = await userService.register(registerInfo);
    //         return user
    //     } catch (error) {
    //         console.log({ error })
    //         return rejectWithValue(error.message);
    //     }
    // }
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
        // .addCase(loginUser.pending, (state) => {
        //     state.loading = true
        // })
        // .addCase(loginUser.fulfilled, (state, { payload }) => {
        //     state.loading = false
        //     state.loggedIn = true
        //     state.user = payload
        // })
        // .addCase(loginUser.rejected, (state, { payload }) => {
        //     state.error = payload
        //     state.loading = false
        // })

    }
})

export const { } = categorySlice.actions;

export default categorySlice.reducer
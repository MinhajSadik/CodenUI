import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from '../../services/userService';


export const loginUser = createAsyncThunk(
    "user/login",
    async (loginInfo, { rejectWithValue }) => {
        try {
            const { user } = await userService.login(loginInfo);
            return user
        } catch (error) {
            console.log({ error })
            return rejectWithValue(error.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    "user/register",
    async (registerInfo, { rejectWithValue }) => {
        try {
            const { user } = await userService.register(registerInfo);
            return user
        } catch (error) {
            console.log({ error })
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            return await userService.logout();
        } catch (error) {
            console.log({ error })
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "user",

    initialState: {
        loading: false,
        loggedIn: false,
        user: {},
        error: ""
    },

    reducers: {
        setUser(state, action) {
            const { user } = action.payload;

            state.user = user;

            if (user === null) {
                state.loggedIn = false;
            } state.loggedIn = true;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loggedIn = true
                state.user = payload
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })
            .addCase(registerUser.pending, (state,) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loggedIn = true
                state.user = payload
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(logoutUser.pending, (state,) => {
                state.loading = true
            })
            .addCase(logoutUser.fulfilled, (state,) => {
                state.loading = false
                state.loggedIn = false
            })
            .addCase(logoutUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from '../../services/userService';


export const loginUser = createAsyncThunk(
    "user/login",
    async (loginInfo, { rejectWithValue }) => {
        try {
            const { user } = await userService.login(loginInfo);
            return user
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
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
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            return await userService.logout();
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const forgotPassword = createAsyncThunk(
    "user/password/forgot",
    async (forgotInfo, { rejectWithValue }) => {
        try {
            return await userService.forgotPassword(forgotInfo)
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const verifyOtp = createAsyncThunk(
    "user/otp/verify",
    async (otpInfo, { rejectWithValue }) => {
        try {
            return await userService.verifyOtp(otpInfo)
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const resetPassword = createAsyncThunk(
    "user/password/reset",
    async (passwordInfo, { rejectWithValue }) => {
        try {
            return await userService.resetPassword(passwordInfo)
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const updatePassword = createAsyncThunk(
    "user/password/update",
    async (passwordInfo, { rejectWithValue }) => {
        try {
            return await userService.updatePassword(passwordInfo)
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const subscriber = createAsyncThunk(
    "user/subscriber",
    async (subscriberInfo, { rejectWithValue }) => {
        try {
            return await userService.subscriber(subscriberInfo)
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message);
        }
    }
);





const userSlice = createSlice({
    name: "user",

    initialState: {
        loading: false,
        loggedIn: false,
        user: {},
        otp: {
            hash: "",
            email: "",
            forgotten: false,
            verified: false,
            newPassword: false
        },
        error: "",
    },

    reducers: {
        setUser(state, { payload }) {
            const { user } = payload;
            state.user = user;

            if (user === null) {
                state.loggedIn = false;
            } state.loggedIn = true;
        }
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
            .addCase(registerUser.pending, (state, { payload }) => {
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
            .addCase(logoutUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(logoutUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loggedIn = false
            })
            .addCase(logoutUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(forgotPassword.pending, (state, { payload }) => {
                state.loading = true
                state.otp.forgotten = false
            })
            .addCase(forgotPassword.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loggedIn = false
                state.otp.email = payload.email
                state.otp.hash = payload.hashed
                state.otp.forgotten = payload.forgotten
            })
            .addCase(forgotPassword.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.otp.forgotten = false
            })
            .addCase(verifyOtp.pending, (state, { payload }) => {
                state.loading = true
                state.otp.verified = false
            })
            .addCase(verifyOtp.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loggedIn = false
                state.otp.verified = payload.verified
            })
            .addCase(verifyOtp.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.otp.verified = false
            })
            .addCase(resetPassword.pending, (state, { payload }) => {
                state.loading = true
                state.otp.newPassword = false
            })
            .addCase(resetPassword.fulfilled, (state, { payload }) => {
                state.loading = false
                state.loggedIn = false
                state.otp.newPassword = payload.newPassword
            })
            .addCase(resetPassword.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.otp.newPassword = false
            })
            .addCase(updatePassword.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updatePassword.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload
            })
            .addCase(updatePassword.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(subscriber.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(subscriber.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload
            })
            .addCase(subscriber.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export const { setUser, setOtp } = userSlice.actions;

export default userSlice.reducer
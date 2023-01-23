import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const loginUser = createAsyncThunk("user/login", async ({ }) => {

})

const userSlice = createSlice({
    name: "user",

    initialState: {

    },


    reducers: {},

    extraReducers: {}
})


export default userSlice.reducer
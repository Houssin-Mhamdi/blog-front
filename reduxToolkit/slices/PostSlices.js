import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
    error: [],
    errorMessage:false
}

export const getPostes = createAsyncThunk("post/getPostes",async(arg,{rejectWithValue})=>{
    try {
        const data =await axios.get("http://localhost:4848/api/post/featured?feature=true")
        console.log(data)
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getPostes.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(getPostes.fulfilled,(state,action)=>{
            state.loading = false
            state.isSuccess = true
            state.data = action.payload
            state.errorMessage = false
        })
        builder.addCase(getPostes.rejected,(state,action)=>{
            state.loading = false
            state.isSuccess = false
            state.error = action.payload
        })
    }
})

const postSliceReducer = postSlice.reducer
export default postSliceReducer
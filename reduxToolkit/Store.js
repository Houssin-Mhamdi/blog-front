import { configureStore } from '@reduxjs/toolkit'
import postSliceReducer from './slices/PostSlices'
const store = configureStore({
    reducer:{
        posts:postSliceReducer
    }
})

export default store
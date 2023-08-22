import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
    status: null,
    error: null
}

const BaseURL = 'https://dummyjson.com/products'
export const FetchProducts = createAsyncThunk('products/fetchProducts',
    async () => {
        const response = await axios.get(BaseURL)
        return response?.data.products
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [FetchProducts.pending]: (state, action) => {
            state.status = 'Pending'
        },
        [FetchProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [FetchProducts.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
})

export default productsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    loading: true,
};


const BaseURL = "https://dummyjson.com/products";
export const FetchProducts = createAsyncThunk("products/fetchProducts", async (newSearchString) => {
    try {
        const response = await axios.get(`${BaseURL}`);
        // const response = await axios.get(`${BaseURL}/search?q=${newSearchString}`);
        return response?.data.products;
    } catch (error) {
        throw error;
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchProducts.pending, (state, action) => {
                state.status = "Pending";
            })
            .addCase(FetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(FetchProducts.rejected, (state, action) => {
                state.status = "rejected";
                state.loading = false;
            });
    },
});

export default productsSlice.reducer;



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// const initialState = {
//     items: [],
//     status: null,
//     loading: true
// }

// const BaseURL = 'https://dummyjson.com/products'
// export const FetchProducts = createAsyncThunk('products/fetchProducts',
//     async () => {
//         const response = await axios.get(BaseURL)
//         return response?.data.products
//     }
// )

// const productsSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [FetchProducts.pending]: (state, action) => {
//             state.status = 'Pending'
//         },
//         [FetchProducts.fulfilled]: (state, action) => {
//             state.status = 'success'
//             state.items = action.payload
//             state.loading === false;
//         },
//         [FetchProducts.rejected]: (state, action) => {
//             state.status = 'rejected'
//         }
//     }
// })

// export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
//Types
import { TProduct } from "@customeTypes/productType";

// Interface For Product State
interface IProductState {
    records: TProduct[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

// Initial State For Product Slice, Implement IProductState
const initialState: IProductState = {
    records: [],
    loading: "idle",
    error: null,
};

// Create Slice for Product
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsCleanUp: (state) => {
            state.records = [];
            state.loading = "idle";
            state.error = null;
        }
    },
    //For Managing Loading and errors
    extraReducers: (builder) => {
        builder.addCase(actGetProducts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetProducts.rejected, (state, action) => {
            state.loading = "failed";   
            //To Insute it's string
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
            }
            
        });
    }
});

// Export actions and reducer
export const {productsCleanUp} = productsSlice.actions;
// To use it from productSlice call
export { actGetProducts };
export default productsSlice.reducer;
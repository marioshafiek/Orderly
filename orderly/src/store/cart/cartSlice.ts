import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@customeTypes/productType";
import actGetProductsById from "./act/actGetProductsById";

interface ICart {
    items: { [key: string]: number }; // {ID:1 : Quantity:3}
    productFullInfo: TProduct[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: null | string;
}

// Initial state
const initialState: ICart = {
    items: {},
    productFullInfo: [],
    loading: "idle",
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<number>) => { 
            const productId = action.payload;
            if (state.items[productId]) {
                state.items[productId] += 1; 
            } else {
                state.items[productId] = 1; 
            }
        },
        removeOneFromCart: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            if (state.items[productId]) {
                if (state.items[productId] > 1) {
                    state.items[productId] -= 1; // Decrease quantity by 1
             
                } else {
                    delete state.items[productId]; // Remove item if quantity becomes zero
                }
            }
        },
        deleteFromCart: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            if (state.items[productId]) {
                delete state.items[productId]; // Remove item from cart
            }
        },
        deleteAllFromCart: (state) => {
            state.items = {}; // Clear all items from the cart
        }
    },
    //For Managing Loading and errors
    extraReducers: (builder) => {
        builder.addCase(actGetProductsById.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProductsById.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.productFullInfo = action.payload;
        });
        builder.addCase(actGetProductsById.rejected, (state, action) => {
            state.loading = "failed";
            //To Insute it's string
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
            }
        });
    }
});

// Export actions and reducer
export { actGetProductsById }
export const { addToCart, removeOneFromCart, deleteFromCart, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;

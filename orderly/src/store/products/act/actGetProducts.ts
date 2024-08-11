//Axios
import axios from "axios";
//Types
import { TProduct } from "@customeTypes/productType";
//Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get<TProduct[]>('/products');
            return response.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data.message || err.message);
            } else {
                return rejectWithValue('An unexpected error');
            }
        }
    }
);

export default actGetProducts;
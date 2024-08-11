// Redux
import { TProduct } from "@customeTypes/productType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
// Axios
import axios from "axios";

const actGetProductsById = createAsyncThunk(
  "cart/actGetProductsById",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cartSlice } = getState() as RootState;
    const itemsId = Object.keys(cartSlice.items);

    try {
      // Use Promise.all to fetch all products by their IDs
      const productRequests = itemsId.map(id =>
        axios.get<TProduct>(`/products/${id}`)
      );
      const responses = await Promise.all(productRequests);
      const products = responses.map(response => response.data);
      return products;

    } catch (error) {
        if(axios.isAxiosError(error))
        {
            return rejectWithValue(error.response?.data.message || error.message);
        }
        else
        {
            return rejectWithValue("An unexpected error");
        }

    }
  }
);

export default actGetProductsById;

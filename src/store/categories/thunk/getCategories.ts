import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {
    id: number; 
    title: string; 
    prefix: string; 
    img: string
}[]

const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("http://localhost:3000/categories");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }else{
        return rejectWithValue('Unexpected Error')
      }
    }
  }
);

export default getCategories;

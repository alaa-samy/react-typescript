import { createSlice } from "@reduxjs/toolkit";
import getCategories from "./thunk/getCategories";

interface ICategoriesState {
    data: {id: number, title: string, prefix: string, img: string}[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null
}

const initialState: ICategoriesState = {
    data : [],
    loading: 'idle',
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getCategories.pending, (state) => {
            state.loading = 'pending';
            state.error = null
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.data = action.payload
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = 'failed';
            if (action.payload && typeof action.payload === 'string'){
                state.error = action.payload
            }
        })
    }
})

export { getCategories }
export default categoriesSlice.reducer;
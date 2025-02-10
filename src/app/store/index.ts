import {configureStore, createSlice} from "@reduxjs/toolkit";
const initialState = {

}
const Slice = createSlice({

    name:'base', initialState, selectors:{},reducers:{}
})

const store = configureStore({
    reducer:{[Slice.reducer.name]: Slice.reducer}

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
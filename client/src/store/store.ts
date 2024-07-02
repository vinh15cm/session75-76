import { configureStore } from "@reduxjs/toolkit";
import reducerProduct from "../store/reducers/productReducer";

const store = configureStore({
    reducer:{
        product:reducerProduct
    }
})

export default store;
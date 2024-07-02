import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cart, Product } from "../interface/interface";

const initialState = {
  product: [] as Product[],
  cart: [] as Cart[],
};
export const getProduct: any = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await axios.get("http://localhost:8080/product");
    return response.data;
  }
);

export const getAllProductsInCart: any = createAsyncThunk(
  "cart/getAllProductsInCart",
  async () => {
    const response = await axios.get("http://localhost:8080/cart");
    //   console.log(response.data);
    return response.data;
  }
);

export const addToCart: any = createAsyncThunk(
  "cart/addToCart",
  async (product: any) => {
    console.log("Product to add to cart:", product.stock);
    const response = await axios.post("http://localhost:8080/cart", product);
    return response.data;
  }
);

const reducerProduct = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        //trạng thái chờ lấy dữ liệu
      })
      .addCase(getProduct.fulfilled, (state: any, action) => {
        // trạng thái lấy dữ liệu thành công
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        // trạng thái lấy dữ liệu thất bại
      })
      .addCase(getAllProductsInCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart.push(action.payload);
        
        // Cập nhật lại stock của sản phẩm sau khi thêm vào giỏ hàng
        const addedProduct = action.payload;
        const productId = addedProduct.id;
        const productToUpdate = state.product.find(
          (p: Product) => p.id === productId
        );

        if (productToUpdate) {
          // Giảm stock của sản phẩm
          productToUpdate.stock -= addedProduct.quantity;
        }
      });
  },
});

export default reducerProduct.reducer;

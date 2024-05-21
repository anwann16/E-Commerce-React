import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartStateType = {
  id: string;
  name: string;
  description?: string;
  category: {
    id: string;
    name: string;
  };
  price: number;
  stock: number;
  image: string;
  quantity: number;
};

export type ProductStateSliceType = {
  carts: CartStateType[];
};

const initialState: ProductStateSliceType = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartStateType>) => {
      const { id, name, description, category, price, image, stock } =
        action.payload;

      const existItems = state.carts.find((item) => item.id === id);
      if (existItems) {
        existItems.quantity += 1;
      } else {
        state.carts.push({
          id,
          name,
          description,
          category,
          price,
          image,
          stock,
          quantity: 1,
        });
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existItem = state.carts.find((item) => item.id === itemId);
      if (existItem) {
        existItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existItem = state.carts.find((item) => item.id === itemId);
      if (existItem) {
        existItem.quantity -= 1;
      }
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.carts = state.carts.filter((item) => item.id !== itemId);
    },
    emptyCart: (state) => {
      state.carts = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;

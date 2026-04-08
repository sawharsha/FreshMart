import { configureStore, createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
  name: "products",

  initialState: [
    {
      id: 1,
      name: "Apple",
      price: 160,
      image:
        "https://cdn.pixabay.com/photo/2025/10/23/11/35/food-9911963_1280.jpg",
    },

    {
      id: 2,
      name: "Banana",
      price: 60,
      image:
        "https://cdn.pixabay.com/photo/2015/11/05/23/08/banana-1025109_1280.jpg",
    },

    {
      id: 3,
      name: "Tomato",
      price: 40,
      image:
        "https://cdn.pixabay.com/photo/2021/09/06/13/21/cherry-tomatoes-6601705_1280.jpg",
    },

    {
      id: 4,
      name: "Potato",
      price: 30,
      image:
        "https://cdn.pixabay.com/photo/2017/12/11/17/29/potatoes-3012769_1280.jpg",
    },

    {
      id: 5,
      name: "Carrot",
      price: 30,
      image:
        "https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184_1280.jpg",
    },

    {
      id: 6,
      name: "Spinach",
      price: 20,
      image:
        "https://cdn.pixabay.com/photo/2022/08/27/04/00/spinach-7413568_1280.jpg",
    },
  ],

  reducers: {},
});

//CART SLICE 

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {

    addToCart: (state, action) => {

      const item = action.payload;

      const existing = state.find(
        (i) => i.id === item.id
      );

      if (existing) {

        existing.quantity += 1;

      } else {

        state.push({
          ...item,
          quantity: 1,
        });

      }
    },

    increaseQty: (state, action) => {

      const item = state.find(
        (i) => i.id === action.payload
      );

      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {

      const item = state.find(
        (i) => i.id === action.payload
      );

      if (item && item.quantity > 1) {

        item.quantity -= 1;

      } else {

        return state.filter(
          (i) => i.id !== action.payload
        );

      }
    },

    removeItems: (state, action) => {

      return state.filter(
        (i) => i.id !== action.payload
      );
    },

    purchaseItems: () => {

        alert("Purchase sucessfull");

      return [];
    },
  },
});

/* ---------------- STORE ---------------- */

const store = configureStore({

  reducer: {

    products: productSlice.reducer,
    cart: cartSlice.reducer,

  },

});

export const {

  addToCart,
  increaseQty,
  decreaseQty,
  removeItems,
  purchaseItems,

} = cartSlice.actions;

export default store;
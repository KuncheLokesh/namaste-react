import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../utils/cartSlice";
import {pokemonApi } from "./pokemonApi"



const appStore=configureStore({
    reducer:{
        cart:CartReducer,
        [pokemonApi.reducerPath]:pokemonApi.reducer
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(pokemonApi.middleware)
    
})

export default appStore;
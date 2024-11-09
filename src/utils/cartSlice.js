import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,acton)=>{
            state.items.push(acton.payload);
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items=[];
            // state.items.length=0
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem,clearCart}=cartSlice.actions;
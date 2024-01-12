import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const CartSlice=createSlice({
   name:"cart",
   initialState:[],
   reducers:{
     add:(state,action)=>{
      state.push(action.payload)
     },
     remove:(state,action)=>{
       return (state.filter((itm)=>
       itm.id!==action.payload))
      
     }
   }
});
export const{add,remove}=CartSlice.actions;
export default CartSlice.reducer;
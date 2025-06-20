import {createSlice} from '@reduxjs/toolkit';
const cart=createSlice({
   name:"cartSlice",
   initialState:{
      items:[],
      count:0,
   },
   reducers:{
      addItems:(state,action)=>{
         state.items.push({...action.payload,quantity:1});
         state.count+=1;
      },
      incrementItem:(state,action)=>{
         state.items.find((food)=> food.id===action.payload.id).quantity+=1;
         state.count+=1;
      },
      decrementItem:(state,action)=>{
         const foodItem=state.items.find((food)=> food.id===action.payload.id);
         foodItem.quantity-=1;
         state.count-=1;
         if(foodItem.quantity===0)
            state.items=state.items.filter((food)=> food.id!==action.payload.id); 
      },
      resetCart:(state)=>{
         state.items=[];
         state.count=0;
      }
   }                                                                                                          
})
export const {addItems,incrementItem,decrementItem,resetCart}=cart.actions;
export default cart.reducer;
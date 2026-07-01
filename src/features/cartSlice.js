import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers:{
        addToCart: (state, action)=>{
            const product = action.payload;
            const existingItem = state.items.find((item)=> item.id == product.id);

            if(existingItem){
                existingItem.quantity += 1  
            }
            else{
                state.items.push({...product, quantity: 1});
            }
        },

        clearCart: (state)=>{
            state.items = [];
        },

        removeFromCart: (state, action)=>{
            const productId = action.payload;
            state.items = state.items.filter((item)=> item.id !== productId);
        },
        decreaseQuantity: (state, action)=>{
            const productId = action.payload;
            const existingItem = state.items.find((item)=> item.id == productId);

            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity -= 1;
            }
            else{
                state.items = state.items.filter((item)=> item.id !== productId);
            }
        }
    }
})

export const {addToCart, clearCart} = cartSlice.actions;


export default cartSlice.reducer;
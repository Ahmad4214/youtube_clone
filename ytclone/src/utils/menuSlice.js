import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toogelMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false;
        },
    },

});

export default menuSlice.reducer;

export const { toogelMenu , closeMenu } = menuSlice.actions;
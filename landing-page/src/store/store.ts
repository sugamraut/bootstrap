import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./NavbarSlice"

const store=configureStore({
    reducer:{
        navbar:NavbarSlice
    }
})
export default store

export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>
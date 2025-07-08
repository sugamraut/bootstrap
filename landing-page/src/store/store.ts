import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./NavbarSlice"
import sliderSlice from "./sliderSlice";

const store=configureStore({
    reducer:{
        navbar:NavbarSlice,
        slider:sliderSlice
    }
})
export default store

export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>
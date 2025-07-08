import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./NavbarSlice"
import sliderSlice from "./sliderSlice";
import clientSlice from "./clientSlice";
import featureSlice from "./featureSlice";

const store=configureStore({
    reducer:{
        navbar:NavbarSlice,
        slider:sliderSlice,
        client:clientSlice,
        feature:featureSlice,
    }
})
export default store

export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>
import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./NavbarSlice"
import sliderSlice from "./sliderSlice";
import clientSlice from "./clientSlice";
import featureSlice from "./featureSlice";
import blogSlice from "./blogSlice";
import farmeSlice from "./frameSlice"
import impactSlice from "./impactSlice";
import footerSlice from "./footerSlice";
import customerSlice from "./contentSlice1";


const store=configureStore({
    reducer:{
        navbar:NavbarSlice,
        slider:sliderSlice,
        client:clientSlice,
        feature:featureSlice,
        blogs:blogSlice,
        farme:farmeSlice,
        impact:impactSlice,
        footer:footerSlice,
        customer:customerSlice,
    }
})
export default store

export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>
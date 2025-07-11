
import { Status, type StatusType } from "../globals/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch } from "./store";
import axios from "axios";
import type { footerItem } from "../globals/typeDeclaration";
import { base_Url } from "../globals/api";

interface FooterState {
  data: footerItem | null;
  loading: boolean;
  error: string | null;
  status: StatusType;
}

const initialState: FooterState = {
  data: null,
  loading: false,
  error: null,
  status: Status.Loading,
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setFooter(state, action: PayloadAction<footerItem>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});
export const {setFooter,setStatus}=footerSlice.actions
export default footerSlice.reducer;

export function featchfooterAsync(){
    return async function featchfooterThunk(dispatch:AppDispatch) {
        try {
            const response =await axios.get(`${base_Url}footer.json`)
            if(response.data.status=== "success"){
                dispatch(setFooter(response.data.data))
                dispatch(setStatus(Status.Success))
            } else{
                dispatch(setStatus(Status.Error))
            }

        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.Error))
            
        }
        
    }
}

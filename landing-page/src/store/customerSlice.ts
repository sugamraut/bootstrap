import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";

const base_Url = import.meta.env.VITE_BASE_URL;

type customerdata = {
  title: string;
  imageUrl: string;
  description: string;
  ctaUrl: string;
  ctaText: string;
  authorImageUrl: string;
  authorName: string;
  quote: string;
  authorPosition: string;
  clientIcons?: {
    clientIcons: string | undefined;
    icon: any;
    index: string;
  }[];
};

interface customerState {
  data: customerdata | null;
  status: StatusType;
  error: string | null;
  loading: boolean;
}

const initialState: customerState = {
  data: null,
  status: Status.Loading,
  error: null,
  loading: false,
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setcustomer(state, action: PayloadAction<customerdata>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const {setcustomer,setStatus}=customerSlice.actions;
export default customerSlice.reducer;


export function featchCustomerAsync(){
    return async function featchCustomerThunk(dispatch:AppDispatch) {
        try {
            const response =await axios.get(`${base_Url}customer.json`);
                 if (response.data.status === "success") {
                    dispatch(setcustomer(response.data.data))
                    dispatch(setStatus(Status.Success))
                 }else{
                    dispatch(setStatus(Status.Error))
                 }
    
        } catch (error) {
            dispatch(setStatus(Status.Error))
        }
        
    }
}
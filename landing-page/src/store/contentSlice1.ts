import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";
import type { contentType } from "../globals/typeDeclaration";
import { base_Url } from "../globals/api";

interface customerState {
  customerdata: contentType | null;
  casedata:contentType|null;
  articledata:contentType|null;
  status: StatusType;
  error: string | null;
  loading: boolean;
}

const initialState: customerState = {
  customerdata: null,
  status: Status.Loading,
  error: null,
  loading: false,
  casedata: null,
  articledata: null
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setcustomer(state, action: PayloadAction<contentType>) {
      state.customerdata = action.payload;
    },
    setCaseStudy(state, action: PayloadAction<contentType>) {
      state.casedata = action.payload;
    },
    setarticle(state, action: PayloadAction<contentType>) {
      state.articledata = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const { setcustomer, setCaseStudy, setarticle, setStatus } =
  customerSlice.actions;
export default customerSlice.reducer;

export function featchCustomerAsync() {
  return async function featchCustomerThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}customer.json`);
      if (response.data.status === "success") {
        dispatch(setcustomer(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}

export function featchcontentAsync() {
  return async function featchcontentThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}case-study.json`);
      if (response.data.status === "success") {
        dispatch(setCaseStudy(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}

export function featcharticleHighlightAsync() {
  return async function featcharticleHighlightThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}articlehighlight.json`);
      if (response.data.status === "success") {
        dispatch(setarticle(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}

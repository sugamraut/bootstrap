import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";

const base_Url = import.meta.env.VITE_BASE_URL;
type FarmeItem = {
  title: string;
  ctaText: string;
};
interface FarmeState {
  data: FarmeItem | null;
  loading: boolean;
  error: string | null;
  status: StatusType;
}

const initialState: FarmeState = {
  data: null,
  loading: false,
  error: null,
  status: Status.Loading,
};

const farmeSlice = createSlice({
  name: "farme",
  initialState,
  reducers: {
    setFarme(state, action: PayloadAction<FarmeItem>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const { setFarme, setStatus } = farmeSlice.actions;
export default farmeSlice.reducer;

export function featchFarmeAsync() {
  return async function featchFarmeThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}cta.json`);
      if (response.data.status === "success") {
        dispatch(setFarme(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.Error));
    }
  };
}

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";
const base_Url = import.meta.env.VITE_BASE_URL;
type ImpactItem = {
  title: string;
  description: string;
  stats: {
    value: any;
    item: string;
    index: number;
    logoUrl: string;
    label: string;
  }[];
};

interface ImpactState {
  data: ImpactItem | null;
  loading: boolean;
  error: string | null;
  status: StatusType;
}

const initialState: ImpactState = {
  data: null,
  loading: false,
  error: null,
  status: Status.Loading,
};

const impactSlice = createSlice({
  name: "impact",
  initialState,
  reducers: {
    setImpact(state, action: PayloadAction<ImpactItem>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});
export const { setImpact, setStatus } = impactSlice.actions;
export default impactSlice.reducer;

export function featchImpactAsync() {
  return async function featchImpactThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}impact-stats.json`);
      if (response.data.status === "success") {
        dispatch(setImpact(response.data.data));
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

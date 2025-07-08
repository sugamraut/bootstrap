import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";

const base_Url = import.meta.env.VITE_BASE_URL;
type FeatureItem = {
  title: string;
  subtitle: string;
  features: {
    iconUrl: string;
    title: string;
    description: string;
  }[];
};

interface FeatureState {
  data: FeatureItem | null;
  loading: boolean;
  error: string | null;
  status: StatusType;
}
const initialState: FeatureState = {
  data: null,
  loading: false,
  error: null,
  status: Status.Loading,
};

const FeatureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setFeature(state, action: PayloadAction<FeatureItem>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const { setFeature, setStatus } = FeatureSlice.actions;
export default FeatureSlice.reducer;

export function featchFeatureAsync() {
  return async function featchFeatureThunck(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}features.json`);
      if (response.data.status === "success") {
        dispatch(setFeature(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
        dispatch(setStatus(Status.Error));
    }
  };
}

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";
import type { SliderItem } from "../globals/typeDeclaration";

const base_Url = import.meta.env.VITE_BASE_URL;


interface SliderState {
  data: SliderItem[];
  loading: boolean;
  error: string | null;
  status: StatusType;
}

const initialState: SliderState = {
  data: [],
  loading: false,
  error: null,
  status: Status.Loading,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSlider(state, action: PayloadAction<SliderItem[]>) {
      state.data = action.payload;
    },
    setSliderStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const { setSlider, setSliderStatus } = sliderSlice.actions;
export default sliderSlice.reducer;

export function fetchSliderAsync() {
  return async function fetchSliderThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}banner.json`);

      if (response.data.status === "success") {
        dispatch(setSlider(response.data.data));
        dispatch(setSliderStatus(Status.Success));
      } else {
        dispatch(setSliderStatus(Status.Error));
      }
    } catch (error) {
      console.error("Failed to fetch slider:", error);
      dispatch(setSliderStatus(Status.Error));
    }
  };
}

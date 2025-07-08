import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";

const base_Url = import.meta.env.VITE_BASE_URL;
type BlogItem = {
  title: string;
  description: string;
  articles: {
    ctaText: string;
    title: string;
    ctaUrl: string | undefined;
    imageUrl: string | undefined;
    article: string;
    index: number;
  }[];
};
interface BlogState {
  data: BlogItem | null;
  loading: boolean;
  error: string | null;
  status: StatusType;
}

const initialState: BlogState = {
  data: null,
  loading: false,
  error: null,
  status: Status.Loading,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlog(state, action: PayloadAction<BlogItem>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const { setBlog, setStatus } = blogSlice.actions;
export default blogSlice.reducer;

export function featchBlogAsync() {
  return async function featchBlogThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}blog.json`);
      if (response.data.status === "success") {
        dispatch(setBlog(response.data.data));
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";

const base_Url = import.meta.env.VITE_BASE_URL;

type NavItem = {
   logoUrl: string;
  brandName: string;
  navigation: {
    label: string;
    href: string;
  }[];
  authActions: {
    label: string;
    href: string;
  }[];
};

interface NavbarState {
  data: NavItem | null;
  loading: boolean;
  error: string | null;
  status: StatusType;
}

const initialState: NavbarState = {
  data: null,
  loading: false,
  error: null,
  status: Status.Loading,
};

const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbar(state, action: PayloadAction<NavItem>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const { setNavbar, setStatus } = NavbarSlice.actions;
export default NavbarSlice.reducer;


export function fetchNavbarAsync() {
  return async function fetchNavbarThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}header.json`);

      if (response.data.status === "success") {
        dispatch(setNavbar(response.data.data)); 
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

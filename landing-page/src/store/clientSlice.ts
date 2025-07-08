import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type StatusType } from "../globals/types";
import type { AppDispatch } from "./store";
import axios from "axios";

const base_Url = import.meta.env.VITE_BASE_URL;

type ClientStateData = {
  title: string;
  description: string;
  clientLogos: string[];
};

interface ClientState {
  data: ClientStateData | null;
  status: StatusType;
  error: string | null;
  loading: boolean;
}

const initialState: ClientState = {
  data: null,
  loading: false,
  status: Status.Loading,
  error: null,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClient(state, action: PayloadAction<ClientStateData>) {
      state.data = action.payload;
    },
    setClientStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const { setClient, setClientStatus } = clientSlice.actions;
export default clientSlice.reducer;

export function fetchClientAsync() {
  return async function fetchClientThunk(dispatch: AppDispatch) {
    try {
      const response = await axios.get(`${base_Url}clients.json`);
         if (response.data.status === "success") {
        dispatch(setClient(response.data.data));
        dispatch(setClientStatus(Status.Success));
      } else {
        dispatch(setClientStatus(Status.Error));
      }
    } catch (error) {
      console.error("Client fetch error:", error);
      dispatch(setClientStatus(Status.Error));
    }
  };
}

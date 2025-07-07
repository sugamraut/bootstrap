import { createSlice } from "@reduxjs/toolkit"
import {Status} from "../globals/types"

interface Inavbar{
brandName:string;
navigation:{
    label:string;
    href:string;
}[];
authAction:{
    label:string;
    href:string;
}
}
interface Iapitype{
    brandName:string;
    lable:string;
    href:string;
    subtitle:string;
    description:string;
    iconUrl:string;
    clientLogos:string

}
// const initialState: IAuthState = {
//   user: {
//     username: "",
//     email: "",
//     password: "",
//   },
//   status: Status.LOADING,
// };


// const  apiSlice=createSlice({
//   name:"api",
//   initialState
  
// })
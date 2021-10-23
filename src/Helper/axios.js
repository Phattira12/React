import axios from "axios";
import { URLLOCAL } from "../Helper/baseURL";

export default axios.create({
  baseURL: URLLOCAL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",

    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

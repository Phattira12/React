import axios from "axios";
import { URLLOCAL } from "../Helper/baseURL";

export default axios.create({
  baseURL: URLLOCAL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

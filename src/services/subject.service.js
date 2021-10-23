import Instance from "../Helper/axios";
//import axios from "axios";

import { URLLOCAL } from "../Helper/baseURL";

export async function GetAllSubject(pageSize,currentPage) {
  try {
    const response = await Instance.get(URLLOCAL + "Subjects/GetSubject?pageSize=" + pageSize + "&currentPage=" + currentPage);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}
import Instance from "../Helper/axios";
//import axios from "axios";

import { URLLOCAL } from "../Helper/baseURL";

export async function GetAllStudent(pageSize, currentPage, search) {
  try {
    const response = await Instance.get(
      URLLOCAL +
        "Students/GetStudents?pageSize=" +
        pageSize +
        "&currentPage=" +
        currentPage +
        "&search=" +
        search
    );
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function SaveStudent(data) {
  try {
    const response = await Instance.post(
      URLLOCAL + "Students/SaveStudent",
      data
    );
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function EditStudent(stdID, data) {
  try {
    const response = await Instance.put(
      URLLOCAL + "Students/EditStudent?stdID=" + stdID,
      data
    );
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function RemoveStudent(stdID) {
  try {
    const response = await Instance.delete(
      URLLOCAL + "Students/RemoveStudent/" + stdID
    );
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

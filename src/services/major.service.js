import Instance from "../Helper/axios";
//import axios from "axios";

import { URLLOCAL } from "../Helper/baseURL";

export async function getAllFaculty() {
  try {
    const response = await Instance.get(URLLOCAL + "Faculty/GetAllFaculty");
    // console.log("res:" + JSON.stringify(response));
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function GetAllMajor(pageSize, currentPage, search) {
  try {
    const response = await Instance.get(
      URLLOCAL +
        "Major/GetMajor?pageSize=" +
        pageSize +
        "&currentPage=" +
        currentPage +
        "&search=" +
        search
    );
    // console.log("res:" + response.data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function SaveMajor(data) {
  try {
    // console.log("data1:" + JSON.stringify(data));
    const response = await Instance.post(
      URLLOCAL + "Major/SaveMajor", data
    );
    return await response.data;
  } catch (error) {
    console.log("error", error.message);
    //console.log(error.response.request._response);
  }
}

export async function UpdateMajor(majorCode, data) {
  try {
    console.log("data:" + JSON.stringify(data));
    const response = await Instance.put(
      URLLOCAL + "Major/UpdateMajor?majorCode=" + majorCode, data
    );
    return await response.data;
  } catch (error) {
    console.log("error", error.message);
  }
}

export async function DeleteMajor(majorCode) {
  try {
    const response = await Instance.delete(
      URLLOCAL + "Major/DeleteMajor?majorCode=" + majorCode
    );
    return await response.data;
  } catch (error) {
    console.log("error", error.message);
  }
}

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

export async function GetAllMajor() {
  try {
    const response = await Instance.get(URLLOCAL + "Major/GetAllMajor");
    // console.log("res:" + JSON.stringify(response));
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function GetAllTeacher(pageSize, currentPage, search) {
  try {
    const response = await Instance.get(
      URLLOCAL +
        "Teachers/GetTeacher?pageSize=" +
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

export async function SaveTeacher(data) {
  try {
    const response = await Instance.post(URLLOCAL + "Teachers/SaveTeacher",data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function UpdateTeacher(teacherCode,data) {
  try {
    const response = await Instance.put(URLLOCAL + "Teachers/UpdateTeacher?teacherCode=" + teacherCode,data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function DeleteTeacher(teacherCode) {
  try {
    const response = await Instance.delete(
      URLLOCAL + "Teachers/DeleteTeacher?teacherCode=" + teacherCode
    );
    return await response.data;
  } catch (error) {
    console.log("error", error.message);
  }
}

import Instance from "../Helper/axios";
import { URLLOCAL } from "../Helper/baseURL";

export async function GetAllSubject() {
  try {
    const response = await Instance.get(URLLOCAL + "Subjects/GetAllSubject");
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function GetAllTeacher() {
  try {
    const response = await Instance.get(URLLOCAL + "Teachers/GetAllTeacher");
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function GetCourse(pageSize,currentPage,search) {
   try {
     const response = await Instance.get(URLLOCAL + "Courses/GetCourse?pageSize=" + pageSize + "&currentPage=" + currentPage + "&search=" + search);
     // console.log("re:" + response.data);
     return await response.data;
   } catch (error) {
     console.log("error", error);
   }
 }

 export async function SaveCourses(data) {
   try {
     const response = await Instance.post(
       URLLOCAL + "Courses/SaveCourses", data);
       return await response.data;
   } catch (error) {
     console.log("error", error);
   }
 }

 export async function UpdateCourse(courseCode, data) {
   try {
     const response = await Instance.put(
       URLLOCAL + "Courses/UpdateCourse?courseCode=" + courseCode, data);
       return await response.data;
   } catch (error) {
     console.log("error", error.message);
   }
 }
 
 export async function DeleteCourse(courseCode) {
   try {
     const response = await Instance.delete(
       URLLOCAL + "Courses/DeleteCourse?courseCode=" + courseCode
     );
     return await response.data;
   } catch (error) {
     console.log("error", error.message);
   }
 }
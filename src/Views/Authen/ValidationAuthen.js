import * as Yup from "yup";

const Schema = Yup.object().shape({
    email: Yup.string().required("กรุณา กรอกอีเมล")
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "กรุณาตรวจสอบ อีเมล์ อีกครั้ง"
        ),
    password: Yup.string().required("กรุณา กรอกรหัสผ่าน"),
});

export default Schema;
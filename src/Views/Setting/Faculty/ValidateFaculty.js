import * as Yup from "yup";

const Schema = Yup.object().shape({
  facultyName: Yup.string().required("กรุณาระบุชื่อคณะ"),
  isUsed: Yup.string().required("กรุณาระบุสถานะ"),
});

export default Schema;
import React, { Comment, Fragment } from "react";
import { Formik } from "formik";

class FFaculty1 extends Comment {
  render() {
    return (
      <Fragment>
        <Formik initialValues={{ facultyName: "" }}
          onSubmit=
          {(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
          <form onSubmit={handleSubmit}>
            <label>ชื่อคณะ :</label>
            <input
             type="text"
             name="facultyName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.facultyName}
           />
            <input type="text" name="facultyName" />
            <button type="submit">บันทึกข้อมูล</button>
          </form>
       )}
        </Formik>
      </Fragment>
    );
  }
}

export default FFaculty1;

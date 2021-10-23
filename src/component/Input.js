import React, { Fragment } from "react";
import { getIn, ErrorMessage } from "formik";

function Input({ type, name, onChange, id, value, errors, touched }) {
  return (
    <Fragment>
      <input
        value={value}
        type={type}
        name={name}
        className="form-control"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <div className="text-danger">
        <ErrorMessage component="div" name={name} className="is-invalid" />
      </div>
    </Fragment>
  );
}

export default Input;
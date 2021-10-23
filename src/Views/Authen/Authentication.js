import React, { useState } from "react";
import logo from "../../img/kru.png";
import { Formik, Form, ErrorMessage, getIn } from "formik";
import Schema from "./ValidationAuthen";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { AUTHEN, USERINFO } from "../../Actions/authen";

import AuthenticationService from "../../services/authen.services";

function Authentication(auth) {
  const [loading, setLoading] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  async function Authen(value) {
    const res = await AuthenticationService(value);
    if (res.statusCode === 1) {
      auth.AUTHEN(res["member_code"]);
      auth.USERINFO();
      auth.history.push("/AttendClass");
    } else {
      Swal.fire({
        icon: "error",
        title: res.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="text-center">
              <img
                src={logo}
                alt="logo"
                width="70"
                height="80"
                className="shadow-light rounded-circle"
              />
            </div>
            <br />
            <div className="card card-primary">
              <div className="card-header">
                <h4>เข้าสู่ระบบ</h4>
              </div>
              <div className="card-body">
                <Formik
                  validationSchema={Schema}
                  initialValues={{
                    email: "",
                    password: "",
                    showPassword: false,
                  }}
                  onSubmit={(value) => {
                    setLoading(1);
                    Authen({
                      email: value.email,
                      password: value.password,
                    });
                    setLoading(0);
                  }}
                >
                  {({ errors, touched, handleBlur, setFieldValue, values }) => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="email">อีเมล</label>
                        <input
                          style={{ backgroundColor: "#E8F0FE" }}
                          id="email"
                          type="text"
                          className={
                            "form-control " +
                            (getIn(touched, "email")
                              ? getIn(errors, "email")
                                ? "is-invalid"
                                : ""
                              : "") +
                            ""
                          }
                          name="email"
                          onBlur={handleBlur}
                          onChange={(e) => {
                            setFieldValue("email", e.target.value);
                          }}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">รหัสผ่าน</label>
                        <input
                          style={{ backgroundColor: "#E8F0FE" }}
                          type={showPassword ? "text" : "password"}
                          className={
                            "form-control input-password-ct " +
                            (getIn(touched, "password")
                              ? getIn(errors, "password")
                                ? "is-invalid"
                                : ""
                              : "") +
                            ""
                          }
                          name="password"
                          onBlur={handleBlur}
                          onChange={(e) => {
                            setFieldValue("password", e.target.value);
                          }}
                        />
                        <span
                          type="button"
                          className={
                            "fa fa-fw " +
                            (showPassword
                              ? "fa-eye field-icon"
                              : "fa-eye-slash field-icon")
                          }
                          onClick={() => {
                            showPassword
                              ? setShowPassword(false)
                              : setShowPassword(true);
                          }}
                        ></span>
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          disabled={loading === 1 ? true : false}
                        >
                          {"เข้าสู่ระบบ"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.Authentication,
});

const mapDispatchToProps = (dispatch) => {
  return {
    AUTHEN: (member_code) => dispatch(AUTHEN(member_code)),
    USERINFO: () => dispatch(USERINFO()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

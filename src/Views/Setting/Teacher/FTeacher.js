import React, { Component, Fragment } from "react";
import Swal from "sweetalert2";
import {
  SaveTeacher,
  UpdateTeacher,
  GetAllMajor,
  getAllFaculty,
} from "../../../services/teacher.service";
import { Formik, ErrorMessage } from "formik";
import DropdownList from "../../../component/DropdownList";

export default class FTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherCode: "0",
      titleId: "",
      name: "",
      lastname: "",
      citizenId: "",
      facultyCode: "",
      facultyName: "",
      majorCode: "",
      majorName: "",
      faculty: [],
      major: [],
    };
  }
  async componentDidMount() {
    this.fetchAllFaculty();
    this.fetchAllMajor();
  }
  async fetchAllFaculty() {
    let rsFaculty = await getAllFaculty();
    rsFaculty.statusCode === "001"
      ? this.setState({ faculty: rsFaculty.data })
      : this.setState({ faculty: [] });
  }
  async fetchAllMajor() {
    let rsMajor = await GetAllMajor();
    //  console.log("Response" + rsMajor.data)
    rsMajor.statusCode === "001"
      ? this.setState({ major: rsMajor.data })
      : this.setState({ major: [] });
  }

  async action(data) {
    let res = "";
    if (data.teacherCode === "0") {
      res = await SaveTeacher(data);
      console.log("data" + JSON.stringify(data));
    } else {
      res = await UpdateTeacher(data.teacherCode, data);
    }

    if (res !== undefined) {
      if (res.statusCode === "003") {
        Swal.fire({
          icon: "success",
          title: "บันทึกข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 500,
        });
        this.props.history.push("/showTeacher");
      } else {
        Swal.fire({
          icon: "warning",
          title: "บันทึกข้อมูลไม่สำเร็จ",
          showConfirmButton: false,
          timer: 500,
        });
      }
    }
  }

  async componentWillMount() {
    //console.log("t:" + JSON.stringify(this.props.location.state));
    if (this.props.location.state !== undefined) {
      let param = this.props.location.state.value;
      console.log("param:" + JSON.stringify(param.facultyName));
      this.setState({
        teacherCode: param.teacherCode,
        titleId: param.titleId,
        name: param.name,
        lastname: param.lastname,
        citizenId: param.citizenId,
        facultyCode: param.facultyCode,
        facultyName: param.facultyName,
        majorCode: param.majorCode,
        majorName: param.majorName,
      });
    } else {
      console.log("444");
    }
  }
  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Formik
          initialValues={{
            teacherCode: this.state.teacherCode,
            titleId: this.state.titleId,
            name: this.state.name,
            lastname: this.state.lastname,
            citizenId: this.state.citizenId,
            facultyCode: this.state.facultyCode,
            majorCode: this.state.majorCode,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.titleId) {
              errors.titleId = "จำเป็นต้องระบุข้อมูล";
            }
            if (!values.name) {
              errors.name = "จำเป็นต้องระบุข้อมูล";
            }
            if (!values.lastname) {
              errors.lastname = "จำเป็นต้องระบุข้อมูล";
            }
            if (!values.citizenId) {
              errors.citizenId = "จำเป็นต้องระบุข้อมูล";
            }
            if (!values.facultyCode) {
              errors.facultyCode = "จำเป็นต้องระบุข้อมูล";
            }
            if (!values.majorCode) {
              errors.majorCode = "จำเป็นต้องระบุข้อมูล";
            }
            return errors;
          }}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            console.log("values:" + JSON.stringify(values));
            this.action(values);
            resetForm();
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
            setFieldValue,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h4>ข้อมูลอาจารย์</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group row col-12">
                        <div className="col-md-4">
                          <label>คำนำหน้าชื่อ</label>
                          <select
                            id="title"
                            class="form-control"
                            name="titleId"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.titleId}
                          >
                            <option >เลือก</option>
                            <option value="1">นาย</option>
                            <option value="2">นาง</option>
                            <option value="3">นางสาว</option>
                          </select>
                          <ErrorMessage
                            name="titleId"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>ชื่อ</label>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            defaultinputvalue={this.state.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>นามสกุล</label>
                          <input
                            className="form-control"
                            type="text"
                            name="lastname"
                            defaultinputvalue={this.state.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastname}
                          />
                          <ErrorMessage
                            name="lastname"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-6">
                          <label>เลขบัตรประจำตัวประชาชน</label>
                          <input
                            className="form-control"
                            type="text"
                            name="citizenId"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.citizenId}
                          />
                          <ErrorMessage
                            name="citizenId"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>
                      <div className="form-group row col-12">
                        <div className="col-md-6">
                          <label>ชื่อคณะ</label>
                          <DropdownList
                            name="facultyCode"
                            defaultInputValue={this.state.facultyName}
                            getOptionLabel={(option) => option.facultyName}
                            getOptionValue={(option) => option.facultyCode}
                            options={this.state.faculty}
                            placeholder={"-- กรุณาเลือกชื่อคณะ --"}
                            value={values.faculty}
                            onChange={async (v) => {
                              setFieldValue("facultyCode", v.facultyCode);
                              // this.setState({ facultyCode: v.facultyCode });
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            component="div"
                            name="facultyCode"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>ชื่อสาขา</label>
                          <DropdownList
                            name="majorCode"
                            defaultInputValue={this.state.majorName}
                            getOptionLabel={(option) => option.majorName}
                            getOptionValue={(option) => option.majorCode}
                            options={this.state.major}
                            placeholder={"-- กรุณาเลือกชื่อสาขา --"}
                            value={values.major}
                            onChange={async (v) => {
                              setFieldValue("majorCode", v.majorCode);
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="majorCode"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          บันทึกข้อมูล
                        </button>{" "}
                        &nbsp;&nbsp;
                        <button className="btn btn-secondary">
                          ล้างข้อมูล
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Fragment>
    );
  }
}

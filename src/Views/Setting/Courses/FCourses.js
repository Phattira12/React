import React, { Component, Fragment } from "react";
import {
  SaveCourses,
  UpdateCourse,
  GetAllSubject,
  GetAllTeacher,
} from "../../../services/course.service";
import Swal from "sweetalert2";
import { Formik} from "formik";
import DropdownList from "../../../component/DropdownList";

export default class FCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseCode: 0,
      courseTerm: "",
      subjectCode: 0,
      subjectName:"",
      teacherCode: 0,
      name:""
    };
  }
  async componentDidMount() {
    this.fetchAllSubject();
    this.fetchAllTeacher();
  }
  async fetchAllSubject() {
    let rsSubject = await GetAllSubject();
    rsSubject.statusCode === "002"
      ? this.setState({ subject: rsSubject.data })
      : this.setState({ subject: [] });
  }
  async fetchAllTeacher() {
    let rsTeacher = await GetAllTeacher();
    //  console.log("Response" + rsTeacher.data)
    rsTeacher.statusCode === "002"
      ? this.setState({ teacher: rsTeacher.data })
      : this.setState({ teacher: [] });
  }

  async action(data) {
    let res = "";
    if (data.courseCode === 0) {
      res = await SaveCourses(data);
      console.log("data" + JSON.stringify(data));
    } else {
      res = await UpdateCourse(data.courseCode, data);
    }

    if (res.statusCode === "003") {
      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
      this.props.history.push("/showCourses");
    } else {
      Swal.fire({
        icon: "warning",
        title: "บันทึกข้อมูลไม่สำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  async componentWillMount() {
    console.log("t:" + JSON.stringify(this.props.location.state));
    if (this.props.location.state !== undefined) {
      let param = this.props.location.state.value;
      console.log("param.courseCode:" + param.courseCode);
      this.setState({
        courseCode: param.courseCode,
        courseTerm: param.courseTerm,
        subjectCode: param.subjectCode,
        teacherCode: param.teacherCode,
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
            courseCode: this.state.courseCode,
            courseTerm: this.state.courseTerm,
            statusCode: this.state.subjectCode,
            teacherCode: this.state.teacherCode,
            name:this.state.name
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
                      <h4>จองรายวิชา</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group row">
                        <div className="col-md-3">
                          <input
                            type="hidden"
                            name="courseCode"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.courseCode}
                          />
                          <label>เลือกเทอม / ปีการศึกษา</label>
                          <select
                            id="term"
                            class="form-control"
                            name="courseTerm"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.courseTerm}
                          >
                            <option selected="">เลือก</option>
                            <option>1/2563</option>
                            <option>2/2563</option>
                            <option>1/2564</option>
                            <option>2/2564</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label>ชื่อวิชา</label>
                          <DropdownList
                            name="subjectCode"
                            defaultInputValue={this.state.subjectName}
                            getOptionLabel={(option) => option.subjectName}
                            getOptionValue={(option) => option.subjectCode}
                            options={this.state.subject}
                            placeholder={"-- กรุณาเลือกชื่อวิชา --"}
                            value={values.subject}
                            onChange={async (v) => {
                              setFieldValue("subjectCode", v.subjectCode);
                            }}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>อาจารย์ผู้สอน</label>
                          <DropdownList
                            name="teacherCode"
                            defaultInputValue={this.state.name}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.teacherCode}
                            options={this.state.teacher}
                            placeholder={"-- กรุณาเลือกอาจารย์ผู้สอน --"}
                            value={values.teacher}
                            onChange={async (v) => {
                              setFieldValue("teacherCode", v.teacherCode);
                            }}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-success"
                        >
                          บันทึกการจองรายวิชา
                        </button>{" "}
                        &nbsp;&nbsp;
                        <button type="reset" className="btn btn-info">
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

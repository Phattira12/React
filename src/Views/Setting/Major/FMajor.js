import React, { Component, Fragment } from "react";
import {
  SaveMajor,
  UpdateMajor,
  getAllFaculty,
} from "../../../services/major.service";
import Swal from "sweetalert2";
import { Formik, ErrorMessage } from "formik";
import DropdownList from "../../../component/DropdownList";

export default class FMajor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      majorCode: "0",
      majorName: "",
      facultyCode: "",
      facultyName:"",
      isUsed: "",
      faculty: [],
    };
  }
  async componentDidMount() {
    this.fetchAllFaculty();
    // this.FfetchAllMajor();
  }
  async fetchAllFaculty() {
    let rsFaculty = await getAllFaculty();
    rsFaculty.statusCode === "001"
      ? this.setState({ faculty: rsFaculty.data })
      : this.setState({ faculty: [] });
  }

  async action(data) {
    let res = "";
    if (data.majorCode === "0") {
      res = await SaveMajor(data);
    } else {
      res = await UpdateMajor(data.majorCode, data);
    }

    if (res !== undefined) {
      if (res.statusCode === "003") {
        Swal.fire({
          icon: "success",
          title: "บันทึกข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 500,
        });
        this.props.history.push("/showMajor");
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
      console.log("param:" + JSON.stringify(param.isUsed));
      this.setState({
        majorCode: param.majorCode,
        majorName: param.majorName,
        facultyCode: param.facultyCode,
        facultyName: param.facultyName,
        isUsed: param.isUsed,
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
            majorCode: this.state.majorCode,
            majorName: this.state.majorName,
            facultyCode: this.state.facultyCode,
            facultyName: this.state.facultyName,
            isUsed: this.state.isUsed,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.majorName) {
              //ไม่มีค่าส่งมา
              errors.majorName = "จำเป็นต้องระบุข้อมูล";
            }
            if (!values.facultyCode) {
              errors.facultyCode = "จำเป็นต้องระบุข้อมูล";
            }
            if (!values.isUsed) {
              errors.isUsed = "จำเป็นต้องระบุข้อมูล";
            }
            return errors;
          }}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            console.log("values:" + values);
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
                      <h4>ข้อมูลสาขา</h4>
                    </div>
                    <div className="card-body">
                    <div className="form-group row">
                        <div className="col-md-6">
                        <label>ชื่อคณะ</label>
                          <DropdownList
                            name="facultyCode"
                            defaultinputvalue={this.state.facultyName}
                            getOptionLabel={(option) => option.facultyName}
                            getOptionValue={(option) => option.facultyCode}
                            options={this.state.faculty}
                            placeholder={"-- กรุณาเลือกชื่อคณะ --"}
                            value={values.faculty}
                            onChange={async (v) => {
                              setFieldValue("faculty", v);
                              this.setState({ facultyCode: v.facultyCode });
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            component="div"
                            name="facultyCode"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-6">
                          <input
                            type="hidden"
                            name="majorCode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.majorCode.trim()}
                          />
                          <label>ชื่อสาขา</label>
                          <input
                            className="form-control"
                            type="text"
                            name="majorName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.majorName}
                          />
                          <ErrorMessage
                            name="majorName"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label>สถานะ</label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input
                              style={{ width: "20px", height: "20px" }}
                              className="form-check-input"
                              type="radio"
                              name="isUsed"
                              id="open"
                              value="1"
                              onChange={handleChange}
                              defaultChecked={values.isUsed === "1"}
                            />
                            <label className="form-check-label" htmlFor="open">
                              เปิดสอน
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              style={{ width: "20px", height: "20px" }}
                              className="form-check-input"
                              type="radio"
                              name="isUsed"
                              id="close"
                              value="0"
                              onChange={handleChange}
                              defaultChecked={values.isUsed === "0"}
                            />
                            <label className="form-check-label" htmlFor="close">
                              ปิดการสอน
                            </label>
                          </div>
                          <ErrorMessage
                            name="isUsed"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>
                      <div className="row">
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

/* <div className="row">
  <div className="col-12 col-md-12 col-lg-12">
    <div className="card card-primary">
      <div className="card-header">
        <h4>ข้อมูลสาขา</h4>
      </div>
      <div className="card-body">
        <div className="form-group row">
          <div className="col-md-6">
            <label>ชื่อสาขา</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <label>สถานะ</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                style={{ width: "20px", height: "20px" }}
                className="form-check-input"
                type="radio"
                name="open"
                id="open"
                value="1"
              />
              <label className="form-check-label" htmlFor="open">
                เปิดสอน
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                style={{ width: "20px", height: "20px" }}
                className="form-check-input"
                type="radio"
                name="close"
                id="close"
                value="0"
              />
              <label className="form-check-label" htmlFor="close">
                ปิดการสอน
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary">บันทึกข้อมูล</button> &nbsp;&nbsp;
          <button className="btn btn-secondary">ล้างข้อมูล</button>
        </div>
      </div>
    </div>
  </div>
</div>; */

import React from "react";
import { Formik } from "formik";
import DropdownList from "../../component/DropdownList";
import { monthTH } from "../../Data/month-th.json";
import { EditStudent, SaveStudent } from "../../services/student.service";
import Swal from "sweetalert2";
import validateStudent from "../Setting/Student/ValidateStudent"
import SearchAddress from "../../component/SearchAddress";
import Input from "../../component/Input"

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: [],
      year: "",
      stdId: "0",
      titleId: 0,
      name: "",
      lastname: "",
      birthday: null,
      day:"",
      month:"",
      phone: "",
      email: "",
      address: "",
      district: "",
      amphur: "",
      province: "",
      postcode: "",
      username: "",
      password: "",
      confirmPassword:""
    };
  }

  fetchInitial() {
    let strInitial = [
      {
        titleId: "1",
        titleName: "นาย",
      },
      {
        titleId: "2",
        titleName: "นาง",
      },
      {
        titleId: "3",
        titleName: "นางสาว",
      },
    ];
    this.setState({
      initial: strInitial,
    });
  }
  componentDidMount() {
    this.fetchInitial();
  }

  async action(data) {
    let res = "";
    if (data.stdId === "0") {
      data.birthday = `${data.year}-${data.month}-${data.day}`
      console.log("PP:" + data)
      res = await SaveStudent(data);
    } else {
      res = await EditStudent(data.stdId, data);
    }
    console.log("PP:" + JSON.stringify(data));
    if (res !== undefined) {
      if (res.statusCode === "003") {
        Swal.fire({
          icon: "success",
          title: "บันทึกข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 500,
        });
        this.props.history.push("/showStudent");
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
      console.log("param.stdId:" + param.stdId);
      this.setState({
        stdId: param.stdId,
        titleId: param.titleId,
        titleName:param.titleName,
        name: param.name,
        lastname: param.lastname,
        birthday: param.birthday,
        day: param.day,
        month: param.month,
        year: param.year,
        phone: param.phone,
        email: param.email,
        address: param.address,
        district: param.district,
        amphur: param.amphur,
        province: param.province,
        postcode: param.postcode,
        username: param.username,
        password: param.password,
        confirmPassword:param.confirmPassword
      });
    } else {
      console.log("444");
    }
  }

  render() {
    var year = new Date().getFullYear();
    let years = Array.from(new Array(3), (e, index) => year - index);

    return (
      <div>
        <div className="col-12 col-md-12 col-lg-12">
          <div className="card card-primary">
            <div className="card-header">
              <h4>ข้อมูลส่วนตัว</h4>
            </div>
            <div className="card-body">
              <Formik
                validationSchema={validateStudent}
                initialValues={{
                  stdId: this.state.stdId,
                  titleId: this.state.titleId,
                  name: this.state.name,
                  lastname: this.state.lastname,
                  birthday: this.state.birthday,
                  day: this.state.day,
                  month:this.state.month,
                  year: this.state.year,
                  phone: this.state.phone,
                  email: this.state.email,
                  address: this.state.address,
                  district: this.state.district,
                  amphur: this.state.amphur,
                  province: this.state.province,
                  postcode: this.state.postcode,
                  username: this.state.username,
                  password: this.state.password,
                  confirmPassword:this.state.confirmPassword
                }}
                enableReinitialize={true}
                onSubmit={(values, { resetForm }) => {
                  //console.log("values:" + values);
                  this.action(values);
                  resetForm();
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  setFieldTouched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <Input
                        type="hidden"
                        name="stdId"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.stdId}
                      />
                      <div className="col-md-4">
                        <label>คำนำหน้าชื่อ</label>
                        <DropdownList
                          name="titleId"
                          defaultInputValue={this.state.titleName}
                          getOptionLabel={(option) => option.titleName}
                          getOptionValue={(option) => option.titleId}
                          options={this.state.initial}
                          placeholder={"--กรุณาเลือก--"}
                          value={values.initial}
                          onChange={async (v) => {
                            setFieldValue("titleId", v.titleId);
                            //this.setState({ initialID: v.initialID });
                          }}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="col-md-4">
                        <label>ชื่อ</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="name"
                          value={values.name}
                          onChange={(v) => {
                            setFieldValue("name", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />                        
                      </div>
                      <div className="col-md-4">
                        <label>นามสกุล</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="lastname"
                          value={values.lastname}
                          onChange={(v) => {
                            setFieldValue("lastname", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />                        
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-2">
                        <label>วันเดือนปีเกิด</label>
                        <select
                          name="day"
                          className="form-control"
                          value={values.day}
                          onChange={(e) => {
                            setFieldValue("day", e.target.value);
                          }}
                          errors={errors}
                          touched={touched}
                        >
                          <option value=""> -- วัน -- </option>
                          {Array.from(Array(31), (e, i) => (
                            <option value={i + 1 < 10 ? "0" + (i + 1) : i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-2">
                        <select
                          name="month"
                          className="form-control"
                          style={{ marginTop: "30px" }}
                          value={values.month}
                          onChange={(e) => {
                            setFieldValue("month", e.target.value);
                          }}
                          errors={errors}
                          touched={touched}
                        >
                          <option value=""> -- เดือน -- </option>
                          {monthTH.map((item, index) => (
                            <option value={item.id} key={item.id}>
                              {item.monthName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-2">
                        <select
                          name="year"
                          className="form-control"
                          style={{ marginTop: "30px" }}
                          value={values.year}
                          onChange={(e) => {
                            setFieldValue("year", e.target.value);
                          }}
                          errors={errors}
                          touched={touched}
                        >
                          <option value=""> -- ปี -- </option>
                          {years.map((year, index) => (
                            <option key={`year${index}`} value={year}>
                              {year + 543}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label>เบอร์โทรศัพท์</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={values.phone}
                          onChange={(v) => {
                            setFieldValue("phone", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />                        
                      </div>
                      <div className="col-md-3">
                        <label>อีเมล</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="email"
                          value={values.email}
                          onChange={(v) => {
                            setFieldValue("email", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                      <SearchAddress
                          onChange={(value) => {
                            setFieldValue("use_address", false);
                            if (value !== "") {
                              setFieldValue(
                                "district",
                                value.subdistrictName
                              );
                              setFieldValue("amphur", value.districtName);
                              setFieldValue("province", value.provinceName);
                              setFieldValue("postcode", value.postCode);
                            } else {
                              setFieldValue("district", "");
                              setFieldValue("amphur", "");
                              setFieldValue("province", "");
                              setFieldValue("postcode", "");
                            }
                          }}
                          name="SearchAddress"
                          placeholder="ค้นหา"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-3">
                        <label>บ้านเลขที่</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="address"
                          value={values.address}
                          onChange={(v) => {
                            setFieldValue("address", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="col-md-3">
                        <label>ตำบล</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="district"
                          value={values.district}
                          onChange={(v) => {
                            setFieldValue("district", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="col-md-2">
                        <label>อำเภอ</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="amphur"
                          value={values.amphur}
                          onChange={(v) => {
                            setFieldValue("amphur", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="col-md-2">
                        <label>จังหวัด</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="province"
                          value={values.province}
                          onChange={(v) => {
                            setFieldValue("province", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="col-md-2">
                        <label>รหัสไปรษณีย์</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="postcode"
                          value={values.postcode}
                          onChange={(v) => {
                            setFieldValue("postcode", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                    </div>

                    <hr />
                    <h5>ข้อมูลผู้ใช้งาน</h5>
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label>ชื่อผู้ใช้งาน</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={values.username}
                          onChange={(v) => {
                            setFieldValue("username", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="col-md-4">
                        <label>รหัสผ่าน</label>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={values.password}
                          onChange={(v) => {
                            setFieldValue("password", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                      <div className="col-md-4">
                        <label>ยืนยันรหัสผ่าน</label>
                        <Input
                          type="password"
                          className="form-control"
                          name ="confirmPassword"
                          onChange={(v) => {
                            setFieldValue("confirmPassword", v);
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-12 text-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          บันทึก
                        </button>{" "}
                        &nbsp; &nbsp;
                        <button type="reset" class="btn btn-secondary">ล้างข้อมูล</button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

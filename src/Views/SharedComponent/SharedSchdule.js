import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SharedSchdule extends Component {
  constructor(props) {
    super(props);
    //console.log("props:"+this.props.pageName);
    let strPagename = this.props.pageName;
  }

  sendGradePage() {
    //เชื่อมโยงลิงค์ไปยังหน้าจอส่งเกรด
    if (this.props.pageName == "AttendClass") {
      this.props.history.push("/formAttendClass"); // จะให้ไปยังหน้าจอเช็คชื่อเข้าชั้นเรียน
    } else if (this.props.pageName == "techSchedule") {
      // ไว้สำหรับเขียนโค้ด
    } else {
      this.props.history.push("/formSendgrade");
    }
  }

  render() {
    return (
      <div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">ภาคการศึกษา</label>
          <div className="col-sm-4">
            <select id="semester" class="form-control">
              <option selected="">เลือก</option>
              <option>1/2564</option>
            </select>
          </div>
          <div className="col-sm-3">
            <button class="btn btn-primary">ค้นหา</button> &nbsp;
            <button class="btn btn-secondary">ล้างข้อมูล</button>
          </div>
        </div>

        {/** สำหรับแสดงรายการข้อมูล */}
        <div className="form-group row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">รหัสวิชา</th>
                <th scope="col">ชื่อวิชา</th>
                <th scope="col">หมู่เรียน</th>
                <th scope="col">หน่วยกิต</th>
                <th scope="col">ห้องเรียน</th>
                <th scope="col">วันเรียน</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.pageName == "AttendClass" ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => this.sendGradePage()}
                    >
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  ) : (
                    <span>
                      <button
                        className="btn btn-success"
                        onClick={() => this.sendGradePage()}
                      >
                        <i
                          className="fa fa-file-excel-o"
                          aria-hidden="true"
                        ></i>
                      </button>{" "}
                      <button className="btn btn-info">
                        <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                      </button>
                    </span>
                  )}
                </td>
                <td>40021002</td>
                <td>การวิเคราะห์และออกแบบระบบ</td>
                <td>01</td>
                <td>3(2-2-5)</td>
                <td>951</td>
                <td>พฤ(13.30 - 16.30)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(SharedSchdule);

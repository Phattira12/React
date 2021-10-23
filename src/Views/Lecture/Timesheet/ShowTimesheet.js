import React from "react";
import SearchTimesheet from "./SearchTimesheet";
import ExportTimesheet from "./ExportTimesheet";

class ShowTimesheet extends React.Component {
  render() {
    return (
      <div>
        <div className="col-12 col-md-12 col-lg-12">
          <div className="card card-primary">
            <div className="card-header">
              <h4>การปฏิบัติงาน</h4>
            </div>

            <div className="card-body">
              <SearchTimesheet />
              <ExportTimesheet />
              <div>
                {/** สำหรับแสดงรายการข้อมูล */}
                <div className="form-group row">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">วันที่ปฏิบัติราชการ</th>
                        <th scope="col">ประเภท</th>
                        <th scope="col">สถานที่</th>
                        <th scope="col">ระยะเวลา</th>
                        <th scope="col">รายได้/ค่าใช้จ่าย</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>21 ส.ค. 64</td>
                        <td>วิทยากร</td>
                        <td>กรุงเทพฯ</td>
                        <td>3</td>
                        <td>-</td>
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
                                <i
                                  class="fa fa-file-pdf-o"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTimesheet;

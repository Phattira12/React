import React, { Component, Fragment } from "react";

class FRoomType extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="col-12 col-md-12 col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h4>ข้อมูลประเภทห้องเรียน</h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-12"> </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-9">
                    <label>ชื่อประเภทห้องเรียน</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label>สถานะ</label>
                    <select className="form-control">
                      <option>-- กรุณาเลือก --</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-9">
                    <label>ที่ตั้ง</label>
                    <select className="form-control">
                      <option>-- กรุณาเลือก --</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-12 text-center">
                    <button class="btn btn-primary">บันทึก</button> &nbsp;
                    &nbsp;
                    <button class="btn btn-secondary">ล้างข้อมูล</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FRoomType;

import React from "react";

function SearchTimesheet() {
  return (
    <div>
      <div className="form-group row">
        <div className="col-md-4 col-form-label">
          <label className=""> ประเภทการปฏิบัติงาน</label>
          <select id="semester" class="form-control">
            <option selected="">เลือก</option>
            <option>1/2564</option>
          </select>
        </div>
        <div className="col-md-2">
          <label className="col-form-label">วันที่ปฏิบัติงาน</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="col-md-2">
          <label className="col-form-label">ถึงวันที่</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="col-md-3">
          <div style={{ marginTop: "37px" }}>
            <button class="btn btn-primary">ค้นหา</button> &nbsp;
            <button class="btn btn-secondary">ล้างข้อมูล</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTimesheet;

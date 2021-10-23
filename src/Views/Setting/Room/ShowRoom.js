import React, { Fragment } from "react";
import ActoinTools from "./ActionTools";

export default function ShowRoom() {
  return (
    <Fragment>
      <ActoinTools />
      {/** สำหรับแสดงรายการข้อมูล */}
      <div className="form-group row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>ห้องเรียน</th>
              <th>ประเภท</th>
              <th>สถานะ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>21 ส.ค. 64</td>
              <td>วิทยากร</td>
              <td>กรุงเทพฯ</td>
              <td>tert</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

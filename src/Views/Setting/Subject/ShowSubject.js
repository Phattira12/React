import React, { Fragment, useState, useEffect } from "react";
import { GetSubject } from "../../../services/subject.service";
import Pagination from "@material-ui/lab/Pagination";

export default function ShowSubject() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    currentPage: 0,
    lastPage: 1,
    totalRow: 0,
  });
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(fetchData,[pageNo,pageSize]);
  
  async function fetchData() {
    const res = await GetSubject(pageSize,pageNo);
    if (res.statusCode == "002") {
      let pagination = res.pagin;
      if (pagination.totalRow > 0) {
        setData(res.data);
        setPage({
          currentPage: pagination.currentPage,
          lastPage: pagination.totalPage,
          totalRow: pagination.totalRow,
        });
        // console.log("res:" + pagination.totalRow);
      }
    }
  }
  
  const handleChangePage = (e, newPage) => {
    e.preventDefault();
    setPageNo(newPage);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="card card-primary">
            <div className="card-header">
              <h4>ข้อมูลรายวิชา</h4>
            </div>
            <div className="card-body">
              {/** สำหรับแสดงรายการข้อมูล */}
              <div className="form-group row">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>รหัสรายวิชา</th>
                      <th>ชื่อวิชา</th>
                      <th>หน่วยกิต</th>
                      <th>คำอธิบาย</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => (
                      <tr kry={value.subjectCode}>
                        <td>{(page.currentPage - 1)* pageSize + (index + 1)}</td>
                        <td>{value.subjectCode}</td>
                        <td>{value.subjectName}</td>
                        <td>{value.credit}</td>
                        <td>{value.description}</td>
                        <td>
                          <button className="btn btn-warning">แก้ไข</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* แสดง pagination */}
              <div>
              <div className="d-flex justify-content-between">
                <div>จำนวนทั้งหมด{page.totalRow} รายการ</div>
                <Pagination
                  count={parseInt(page.lastPage)}
                  page={pageNo}
                  color="primary"
                  size="small"
                  defaultPage={6}
                  siblingCount={1}
                  onChange={handleChangePage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}



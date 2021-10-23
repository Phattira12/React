import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  GetAllTeacher,
  DeleteTeacher,
} from "../../../services/teacher.service";
import Pagination from "@material-ui/lab/Pagination";
import Swal from "sweetalert2";
import Icon from "../../../assets/icons/icons";
import SVGarrowClockwise from "../../../assets/svgs/SVGarrowClockwise";

export default function ShowTeacher() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    currentPage: 0,
    lastPage: 1,
    totalRow: 0,
  });
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(fetchData, [pageNo, pageSize, search]);

  async function fetchData() {
    const res = await GetAllTeacher(pageSize, pageNo, search);
    if (res.statusCode == "001") {
      let pagination = res.pagin;
      if (pagination.totalRow > 0) {
        setData(res.data);
        setPage({
          currentPage: pagination.currentPage,
          lastPage: pagination.totalPage,
          totalRow: pagination.totalRow,
        });
      }
    }
  }

  const searchData = (e) => {
    e.preventDefault();
    setData([]);
    fetchData();
  };

  const clearData = (e) => {
    e.preventDefault();
    setData([]);
    setSearch("");
    setPageNo(1);
    setPageSize(10);
    fetchData();
  };

  const deleteData = async function (e, prmTeacherCode, prmName,prmLastname) {
    e.preventDefault();
    const sweetConfirm = await new Swal({
      className: "bg-modal-red",
      icon: "question",
      iconColor: "red",
      //dangerMode: true,
      text: "คุณต้องการลบข้อมูลอาจารย์" + prmName + " " + prmLastname + "ใช่หรือไม่?",
      showCancelButton: true,
      confirmButtonText: "ใช่",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      }
    });

    if (sweetConfirm) {
      const result = await DeleteTeacher(prmTeacherCode);
      if (result.statusCode === "001") {
        new Swal({
          title: "สำเร็จ!",
          text: "",
          icon: "success",
          showConfirmButton: false,
          button: "ปิด",
          timer: 1500,
        });
        fetchData();
      }
    }
  };

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
              <h4>ข้อมูลอาจารย์</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="row col-md-12">
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ค้นหาข้อมูลอาจารย์"
                          aria-label=""
                          value={search}
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={(e) => {
                              searchData(e);
                            }}
                          >
                            <Icon
                              icon="search"
                              viewBox="0 0 16 16"
                              color="#FDFEFE"
                              size={16}
                              className=""
                            />
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(e) => {
                              clearData(e);
                            }}
                          >
                            <SVGarrowClockwise color="#FDFEFE" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 text-right">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        history.push("/fTeacher");
                      }}
                    >
                      <Icon
                        icon="add"
                        viewBox="0 0 16 16"
                        color="#FDFEFE"
                        size={16}
                        className=""
                      />{" "}
                      เพิ่มข้อมูล
                    </button>
                  </div>
                </div>
              </div>
              {/** สำหรับแสดงรายการข้อมูล */}
              <div className="form-group row">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>รหัสอาจารย์</th>
                      <th>คำนำหน้าชื่อ</th>
                      <th>ชื่อ-นามสกุล</th>
                      <th>เลขบัตรประจำตัวประชาชน</th>
                      <th>คณะ</th>
                      <th>สาขา</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => (
                      <tr key={value.teacherCode}>
                        <td>
                          {(page.currentPage - 1) * pageSize + (index + 1)}
                        </td>
                        <td>{value.teacherCode}</td>
                        <td>{value.titleId}</td>
                        <td>{value.name + " " + value.lastname}</td>
                        <td>{value.citizenId}</td>
                        <td>{value.facultyName}</td>
                        <td>{value.majorName}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={(e) => {
                              history.push("/fTeacher", { value: value });
                            }}
                          >
                            <Icon
                              icon="pencil"
                              viewBox="0 0 16 16"
                              color="#FDFEFE"
                              size={16}
                              className=""
                            />
                          </button>
                          &nbsp;
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={(e) => {
                              deleteData(e, value.teacherCode, value.name,value.lastname);
                              return false;
                            }}
                          >
                            <Icon
                              icon="trash"
                              viewBox="0 0 16 16"
                              color="#FDFEFE"
                              size={16}
                              className=""
                            />
                          </button>
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

import React from "react";
import kru_logo from "../img/kru.png";
import { Route } from "react-router";
import Profile from "../Views/Profile/Profile";
import { Link, NavLink } from "react-router-dom";

export default class Sidebar extends React.Component {
  render() {
    const styles = {
      className: "nav-link",
      activeClassName: "",
    };

    const navItems = [
      {
        label: "จัดการห้องเรียน",
        subMenu: [
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/attendClass",
            item: "เช็คชื่อเข้าชั้นเรียน",
          },
          {
            id: 2,
            icon: "fa fa-caret-right",
            to: "/techSchedule",
            item: "ตารางสอน",
          },
        ],
      },
      {
        label: "งานทะเบียนและวัดผล",
        subMenu: [
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/attendClass",
            item: "อนุมัติผลการเรียน",
          },
        ],
      },
      {
        label: "ระบบสนันสนุนการตัดสินใจ",
        subMenu: [
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/attendClass",
            item: "เช็คชื่อเข้าชั้นเรียน",
          },
        ],
      },
      {
        label: "ตั้งค่า",
        subMenu: [
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/fCurriculumn",
            item: "โครงสร้างหลักสูตร",
          },
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/formCurriculumn",
            item: "แผนการเรียน",
          },
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/showdata",
            item: "จัดตารางสอน",
          },
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/FRoomType",
            item: "ประเภทห้องเรียน",
          },
          {
            id: 1,
            icon: "fa fa-caret-right",
            to: "/showRoom",
            item: "ห้องเรียน",
          },
        ],
      },
    ];

    const subItems = navItems.map((el) => el.subMenu);

    return (
      <div>
        <div className="main-sidebar">
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <a href="#">
                <img
                  src={kru_logo}
                  style={{ width: "80px", height: "90px", margin: "10px" }}
                />
              </a>
            </div>
            <div className="sidebar-brand sidebar-brand-sm">
              <a href="#">KRU</a>
            </div>
            {/** เมนูด้านข้าง */}

            <div>
              <ul className="sidebar-menu" style={{ marginTop: "50px" }}>
                <li className="menu-header">แดชบอร์ด</li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link has-dropdown">
                    <i className="fas fa-fire"></i>
                    <span>แดชบอร์ด</span>
                  </a>
                </li>
                {/*

                {navItems.map((item, index) => (
                  <li>
                    <a href="#">{item.label}</a>
                    <ul>
                      {subItems[index].map((subItem) => (
                        <li>{subItem.item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
                      */}

                <li className="menu-header">จัดการห้องเรียน</li>

                <NavLink to="/attendClass" className="nav-link active">
                  <i className="far fa-square"></i>
                  <span> เช็คชื่อเข้าชั้นเรียน</span>
                </NavLink>

                <NavLink to="/techSchedule" className="nav-link">
                  <i className="far fa-square"></i>
                  <span> ตารางสอน</span>
                </NavLink>

                <NavLink to="/showCourses" className="nav-link">
                  <i className="far fa-square"></i>
                  <span> จองรายวิชาเรียน </span>
                </NavLink>

                <NavLink to="/sendGrade" className="nav-link">
                  <i className="far fa-square"></i>
                  <span> ส่งผลการเรียน</span>
                </NavLink>

                <NavLink to="/showdata" className="nav-link">
                  <i className="far fa-square"></i>
                  <span> ชั้นเรียนที่ปรึกษา</span>
                </NavLink>
                <NavLink to="/showTimesheet" className="nav-link">
                  <i className="far fa-square"></i>
                  <span> บันทึกการปฏิบัติงาน</span>
                </NavLink>
                <li class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link has-dropdown"
                    data-toggle="dropdown"
                  >
                    <i class="fas fa-columns"></i> <span>ตั้งค่า</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <NavLink to="/fCurriculumn" className="nav-link">
                        <i className="far fa-square"></i>
                        <span>โครงสร้างหลักสูตร</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/formCurriculumn" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> แผนการเรียน</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/showdata" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> จัดตารางสอน</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/FRoomType" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> ประเภทห้องเรียน</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/showRoom" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> ห้องเรียน</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/showFaculty" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> ข้อมูลคณะ</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/showMajor" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> สาขาวิชา</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/showStudent" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> ข้อมูลนักศึกษา</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/showSubject" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> ข้อมูลรายวิชา</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/showTeacher" className="nav-link">
                        <i className="far fa-square"></i>
                        <span> ข้อมูลอาจารย์</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

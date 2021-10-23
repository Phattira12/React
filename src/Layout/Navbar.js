import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-bg"></div>
        <nav className="navbar navbar-expand-lg main-navbar">
          <div className="mr-auto">
            <li>
              <a
                href="#"
                data-toggle="sidebar"
                className="nav-link nav-link-lg"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </div>
          <ul className="navbar-nav navbar-right">
            <li className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg nav-link-user"
              >
                <img
                  alt="image"
                  src="../assets/img/avatar/avatar-1.png"
                  className="rounded-circle mr-1"
                />
                <div className="d-sm-none d-lg-inline-block">Hi, Sabaiprae</div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="/profile" className="dropdown-item has-icon">
                  <i className="far fa-user"></i> ข้อมูลส่วนตัว
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item has-icon text-danger">
                  <i className="fas fa-sign-out-alt"></i> ออกจากระบบ
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

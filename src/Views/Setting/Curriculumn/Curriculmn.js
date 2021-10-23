import React, { Component, Fragment } from "react";
class Curriclumn extends Component {
  render() {
    return (
      <Fragment>
        <div className="form-group row">
          <div className="col-md-6">
            <label>ชื่อหลักสูตร</label> <br />
            หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ <br />
            Bachelor of Science Program in Computer Science
          </div>
          <div className="col-md-6">
            <label>ชื่อปริญญา</label>
            <br />
            วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์) <br />
            Bachelor of Science (Computer Science)
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <label>อักษรย่อปริญญา</label>
            <br />
            วท.บ. (วิทยาการคอมพิวเตอร์) B.S. (Computer Science)
          </div>
          <div className="col-md-3">
            <label>รูปแบบของหลักสูตร</label>
            <br />
            หลักสูตรปริญญาตรี 4 ปี
            <br />
          </div>
          <div className="col-md-3">
            <label>จำนวนหน่วยกิต</label>
            <br />
            130 หน่วยกิต
            <br />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Curriclumn;

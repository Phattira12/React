import React, { Fragment } from "react";

export default function ActoinTools() {
  return (
    <Fragment>
      {" "}
      <div className="row">
        <div className="col-md-12 text-right">
          <div className="btn btn-group">
            <button class="btn btn-success" onClick="">
              <i class="fa fa-plus-circle"></i>
            </button>
            <button class="btn btn-success">
              <i className="fa fa-print" aria-hidden="true"></i>
            </button>
            <button class="btn btn-info">
              <i className="fa fa-file-excel-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

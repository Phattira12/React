import React, { Component } from "react"
import SharedSchdule from "../SharedComponent/SharedSchdule"

export default class Sendgrade extends Component{
    
    render()
    {
        return(
            <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
                <div className="card card-primary">
                    <div className="card-header">
                        <h4>ส่งผลการเรียน</h4>
                    </div>
                    <div className="card-body">
                        <SharedSchdule pageName={"sendGrade"}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
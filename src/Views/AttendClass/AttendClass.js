import React, { Component } from "react"
import SharedSchdule from "../SharedComponent/SharedSchdule"

export default class AttendClass extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h4>เช็คชื่อเข้าชั้นเรียน</h4>
                        </div>
                        <div className="card-body">
                            <SharedSchdule pageName={"AttendClass"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
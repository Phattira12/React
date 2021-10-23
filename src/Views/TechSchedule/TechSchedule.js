import React from "react"
import SharedSchdule from "../SharedComponent/SharedSchdule"

export default class TechSchedule extends React.Component{
    render()
    {
        return(
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h4>ตารางสอน</h4>
                        </div>
                        <div className="card-body">
                            <SharedSchdule pageName = {"techSchedule"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
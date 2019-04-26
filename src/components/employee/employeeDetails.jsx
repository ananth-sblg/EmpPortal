import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function EmployeeDetails({ employee, isLoggedIn }) {

    if (!isLoggedIn)
        return <Redirect to="/signIn" />
    return (
        <div className="container section">
            <div className="row">
                <div className="col s12 l8 m8">
                    <div className="card horizontal">
                        <img src="https://via.placeholder.com/200.png/09f/fffC/O https://placeholder.com/#How_To_Set_Image_Size" alt="" />
                        <a href="#" className="btn btn-floating halfway-fab "><i className={"fas fa-" + (employee.gender === "male" ? "male blue" : "female pink")}></i></a>

                        <div className="card-stacked">
                            <div className="card-content">

                                <span className="card-title">
                                    Name: {employee.name}
                                </span>
                                <p className="grey-text">Age: {employee.age}</p>
                                <p className="grey-text">Gender: {employee.gender}</p>
                                <p className="grey-text">Email: {employee.email}</p>
                                <p className="grey-text">Phone: {employee.phoneNo}</p>
                                <div className="card-action">
                                    <a href="#">{employee.phoneNo}</a>
                                    <a href="#">{employee.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const employee = state.employeesList.user.find(emp => {
        return emp.id == ownProps.match.params.id;
    })
    return {
        employee: employee,
        isLoggedIn: state.isLoggedIn
    }
}
export default connect(mapStateToProps)(EmployeeDetails)

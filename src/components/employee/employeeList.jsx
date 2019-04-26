import React from 'react';
import { connect } from 'react-redux';
import Employee from './employee';
import { Redirect } from 'react-router-dom';

function EmployeeList({ employeeList, isLoggedIn }) {

    if (!isLoggedIn)
        return <Redirect to="/signIn" />

    return (

        <div className="container">
            <div className="row">
                <div className="col s12 m9 l9">
                    <ul className="collection with-header">
                        <li className="collection-header">
                            <h3 className="center">Employees List</h3>
                        </li>
                        {
                            employeeList && employeeList.map(emp => {
                                return (<Employee employee={emp} key={emp.id} />)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employeeList: state.employeesList.user,
        isLoggedIn: state.isLoggedIn
    };
}

export default connect(mapStateToProps)(EmployeeList);

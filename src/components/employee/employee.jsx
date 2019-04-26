import React from 'react';
import { Link } from 'react-router-dom';

function Employee({ employee }) {
    return (
        <Link to={"/employee/" + employee.id}>
            <li className="collection-item avatar">
                <i className={"fas circle fa-" + (employee.gender === "male" ? "male blue" : "female pink")}></i>
                <span className="title">{employee.name}</span>
                <p className="grey-text">{employee.phoneNo}</p>
                <span href="#" title={employee.email} className="secondary-content"><i className="material-icons">email</i></span>
            </li>
        </Link>
    )
}

export default Employee;

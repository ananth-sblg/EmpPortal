import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ isLoggedIn, logout }) {

  const links = isLoggedIn ?  (<li><Link to="/signin" onClick={() => logout()}>Log Out</Link></li>) : (<li><Link to="/signin">Log In</Link></li>);

  return (
    <nav className="nav-wrapper">
        <div className="container">
        <Link to="/employees" className="brand-logo">EmpPortal</Link>
        <ul className= "right">
            {links}
        </ul>
        </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({type: "LOGOUT"})
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(Navbar)

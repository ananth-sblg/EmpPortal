import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputField from '../shared/inputField';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        error: null,
        email: null,
        password: null
    }

    setValue = (data) => {
        this.setState({
            [data.name]: data.value
        })
    }

    submitHandler = (e) => {
        console.log(this.state)
        e.preventDefault();
        if(this.state.email === "hruday@gmail.com" && this.state.password === "hruday123") {
            this.props.login();
        }
    }

    render() {
        if(this.props.isLoggedIn) 
         return <Redirect to="/employees" />

        return (
            <div className="signIn">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m10 l10">
                            <h3>Sign In</h3>
                            <form onSubmit={this.submitHandler}>
                                <InputField 
                                type={"email"}
                                id={"email"}
                                title={"Email"} setValue={this.setValue}/>
                                <InputField 
                                type={"password"}
                                id={"password"}
                                title={"Password"} setValue={this.setValue}/>
                                <p className="red-text">{this.state.error}</p>
                                <div className="center">
                                    <input type="submit" className="btn align-center" value="Sign In"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: () => { dispatch({type: "LOGIN_SUCCESS"})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
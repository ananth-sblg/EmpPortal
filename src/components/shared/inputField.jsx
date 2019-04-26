import React, { Component } from 'react'

class InputField extends Component {
    state = {
        valid: true
    }

    onChangeHandler = (e) => {
        console.log(e.target.id);
        console.log(e.target.id, e.target.value)

        if(e.target.id === "email") {
            const isEmailValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e.target.value);
            isEmailValid ? this.setState({ valid: true}) : this.setState({ valid: false});

            if(isEmailValid) {
                this.props.setValue({name: "error", value: null})
                this.props.setValue({name: "email", value: e.target.value})
            }
            else {
                this.props.setValue({name: "error", value: "Please enter valid e-mail id"})
            }
        }
        else if(e.target.id === "password") {
            this.props.setValue({name: "password", value: e.target.value})
        }
        
    }
    render() {
        return (
            <div className="input-field">
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <input type={this.props.type} id={this.props.id} onChange={this.onChangeHandler} />
            </div>
        )
    }
}

export default InputField;  
import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.component.styles.scss"

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]:value      // this will dinamically know what is [name], it coult be password or email
        })
    }

    render() {
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form action="" onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label='email'
                required
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
              />
              <CustomButton type="submit">Sign In</CustomButton>
            </form>
          </div>
        );
    }
}

export default SignIn
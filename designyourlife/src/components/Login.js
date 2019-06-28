import React from 'react';
import {connect} from 'react-redux';
import {login, register} from '../actions/actions';

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  
    login = e => {
      console.log("LOGIN TRIGGERED")
      e.preventDefault();
      // localStorage.setItem("token", "abc")
      this.props.login(this.state.credentials)
        .then(() => {
          // only fires if login call is successful
          this.props.history.push('/');
        })
        .catch((err) => {
        })
    }

    register = e => {
      console.log("REGISTER TRIGGERED")
      e.preventDefault();
      this.props.register(this.state.credentials)
        .then(() => {

        })
    }
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
        }
      });
    }
  

  render() {
    return (
      <div className="loginbox">
        <h1 className="loginHeader" >Good Time Journal</h1>
        <p>{this.props.registered ? (
                  "Registered!"
                ) : (
                  "Sign Up / Register and Start your Journey Here!"
                )}
        </p>
        <form id = "form" onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder = "username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder = "password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button className="button upperButton">Log in</button>
          <button className="button" onClick = {this.register}>Register</button>
        </form>
      </div>
    )
  }
}
  function mapStateToProps(state){
    return {
      registered: state.registered
    }
}

  export default connect(mapStateToProps, { login, register })(Login);
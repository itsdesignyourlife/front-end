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
      e.preventDefault();
      // localStorage.setItem("token", "abc")
      this.props.login(this.state.credentials)
        .then(() => {
          // only fires if login call is successful
          console.log("supposedly login successful")
          this.props.history.push('/');
        })
    }

    register = e => {
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
        <div>
          <h1>LOGIN COMPONENT</h1>
          <form onSubmit={this.login}>
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
            <button>Log in</button>
            <button onClick = {this.register}>Register</button>
          </form>
        </div>
      )
    }
  }
  
  function mapStateToProps(state){
    return {}
}

  export default connect(mapStateToProps, { login, register })(Login);
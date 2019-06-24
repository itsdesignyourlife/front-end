import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/actions';

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  
    login = e => {
      e.preventDefault();
      this.props.login(this.state.credentials)
        .then(() => {
          // only fires if login call is successful
          this.props.history.push('/');
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
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      )
    }
  }
  
  function mapStateToProps(){
    return {}
}

  export default connect(mapStateToProps, { login })(Login);
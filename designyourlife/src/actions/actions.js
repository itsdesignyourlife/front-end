import axios from 'axios';
import axiosAuth from '../utils/axiosAuth'


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';





export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('https://dyl-backend.herokuapp.com/api/auth/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
      });
  };



  export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios
      .post('https://dyl-backend.herokuapp.com/api/auth/register', creds)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS});
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE});
      });
  };

  



  export const getPosts = () => (dispatch) => {
    dispatch ({type: GET_START})
    axiosAuth()
    .get('https://dyl-backend.herokuapp.com/api/posts')
    .then(res => {
        console.log("getPayload: ", res.data)
        dispatch({type: GET_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: GET_FAILURE})
    })

}
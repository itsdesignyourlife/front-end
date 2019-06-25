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

export const GETUSERPOSTS_START = 'GETUSERPOSTS_START';
export const GETUSERPOSTS_SUCCESS = 'GETUSERPOSTS_SUCCESS';
export const GETUSERPOSTS_FAILURE = 'GETUSERPOSTS_FAILURE';

export const GET1_START = 'GET1_START';
export const GET1_SUCCESS = 'GET1_SUCCESS';
export const GET1_FAILURE = 'GET1_FAILURE';

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';





export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('https://dyl-backend.herokuapp.com/api/auth/login', creds)
      .then(res => {
        console.log("LOGIN_RES: ", res)
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("LOGIN ERR: ", err)
        dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
      });
  };


  export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios
      .post('https://dyl-backend.herokuapp.com/api/auth/register', creds)
      .then(res => {
        console.log("REGISTER RES: ", res)
        dispatch({ type: REGISTER_SUCCESS});
      })
      .catch(err => {
        console.log("REGISTER ERR: ", err)
        dispatch({ type: REGISTER_FAILURE});
      });
  };

  
  export const getPosts = () => (dispatch) => {
    dispatch ({type: GET_START})
    axiosAuth()
    .get('https://dyl-backend.herokuapp.com/api/posts')
    .then(res => {
        console.log("GETPOSTS RES: ", res)
        dispatch({type: GET_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log("GETPOSTS ERR: ", err)
        dispatch({type: GET_FAILURE})
    })
}

export const getPostsByUserId = (user_id) => (dispatch) => {
  console.log(user_id)
  dispatch ({type: GETUSERPOSTS_START})
  axiosAuth()
  .get(`https://dyl-backend.herokuapp.com/api/home/${user_id}`)
  .then(res => {
      console.log("GETUSERPOSTS RES: ", res)
      dispatch({type: GETUSERPOSTS_SUCCESS, payload: res.data})
  })
  .catch(err => {
      console.log("GETUSERPOSTS ERR: ", err)
      dispatch({type: GETUSERPOSTS_FAILURE})
  })
}


export const getPostById = (id) => (dispatch) => {
  console.log(id)
  dispatch ({type: GET1_START})
  axiosAuth()
  .get(`https://dyl-backend.herokuapp.com/api/posts/${id}`)
  .then(res => {
      console.log("GET1 RES: ", res)
      dispatch({type: GET1_SUCCESS, payload: res.data})
  })
  .catch(err => {
      console.log("GET1 ERR: ", err)
      dispatch({type: GET1_FAILURE})
  })
}



export const newPost = postObj => dispatch => {
  console.log("postObj: ", postObj)
  dispatch({ type: POST_START });
  axiosAuth()
    .post('https://dyl-backend.herokuapp.com/api/posts', postObj)
    .then(res => {
      console.log("POST RES: ", res)
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("POST ERR: ", err)
      dispatch({ type: POST_FAILURE});
    });
};
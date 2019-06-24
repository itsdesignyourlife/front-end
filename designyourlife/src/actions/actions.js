import axios from 'axios';
export const AN_ACTION = "AN_ACTION";
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';




export function actionFunction(){
    return {type: AN_ACTION, payload: {}}
}


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
      });
  };
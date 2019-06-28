import axios from 'axios';
import axiosAuth from '../utils/axiosAuth';


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

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const REFPOST_START = 'REFPOST_START';
export const REFPOST_SUCCESS = 'REFPOST_SUCCESS';
export const REFPOST_FAILURE = 'REFPOST_FAILURE';

export const UPDATEREF_START = 'UPDATEREF_START';
export const UPDATEREF_SUCCESS = 'UPDATEREF_SUCCESS';
export const UPDATEREF_FAILURE = 'UPDATEREF_FAILURE';

export const GETUSERREFS_START = 'GETUSERREFS_START';
export const GETUSERREFS_SUCCESS = 'GETUSERREFS_SUCCESS';
export const GETUSERREFS_FAILURE = 'GETUSERREFS_FAILURE';

export const DELETEREF_START = 'DELETEREF_START';
export const DELETEREF_SUCCESS = 'DELETEREF_SUCCESS';
export const DELETEREF_FAILURE = 'DELETEREF_FAILURE';


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('https://dyl-backend.herokuapp.com/api/auth/login', creds)
      .then(res => {
        console.log("LOGIN_RES: ", res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user.id);
        localStorage.setItem('username', res.data.user.username);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
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
      dispatch({type: GET_SUCCESS})
  })
  .catch(err => {
      console.log("GETPOSTS ERR: ", err)
      dispatch({type: GET_FAILURE})
  })
}

export const getPostsByUserId = (user_id) => (dispatch) => {
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
  dispatch ({type: GET1_START})
  axiosAuth()
  .get(`https://dyl-backend.herokuapp.com/api/posts/${id}`)
  .then(res => {
      console.log("GET1 RES: ", res)
      dispatch({type: GET1_SUCCESS})
  })
  .catch(err => {
      console.log("GET1 ERR: ", err)
      dispatch({type: GET1_FAILURE})
  })
}


//add ID to arg
export const newPost = (postObj, id) => dispatch => {
  dispatch({ type: POST_START });
  axiosAuth()
    .post('https://dyl-backend.herokuapp.com/api/posts', postObj)
    .then(res => {
      console.log("POST RES: ", res)
      dispatch({ type: POST_SUCCESS, payload: res.data.posts});
    })
    .catch(err => {
      console.log("POST ERR: ", err)
      dispatch({ type: POST_FAILURE});
    });
};


export const updatePost = (id, postObj) => dispatch => {
  dispatch({ type: UPDATE_START });
  axiosAuth()
    .put(`https://dyl-backend.herokuapp.com/api/posts/${id}`, postObj)
    .then(res => {
      console.log("UPDATE RES: ", res)
      dispatch({ type: UPDATE_SUCCESS, payload: res.data.posts});
    })
    .catch(err => {
      console.log("UPDATE ERR: ", err)
      dispatch({ type: UPDATE_FAILURE});
    });
};


export const deletePost = (id, user_id) => dispatch => {
  dispatch({ type: DELETE_START });
  axiosAuth()
    .delete(`https://dyl-backend.herokuapp.com/api/posts/${id}`, user_id)
    .then(res => {
      console.log("DELETE RES: ", res)
      dispatch({ type: DELETE_SUCCESS});
    })
    .catch(err => {
      console.log("DELETE ERR: ", err)
      dispatch({ type: DELETE_FAILURE});
    });
};


//##############################################################


export const newRefPost = (postObj) => dispatch => {
  dispatch({ type: REFPOST_START });
  axiosAuth()
    .post('https://dyl-backend.herokuapp.com/api/reflections', postObj)
    .then(res => {
      console.log("REF POST RES: ", res)
      dispatch({ type: REFPOST_SUCCESS, payload: res.data.reflections});
    })
    .catch(err => {
      console.log("POST ERR: ", err)
      dispatch({ type: REFPOST_FAILURE});
    });
};

export const updateRefPost = (id, postObj) => dispatch => {
  dispatch({ type: UPDATEREF_START });
  axiosAuth()
    .put(`https://dyl-backend.herokuapp.com/api/reflections/${id}`, postObj)
    .then(res => {
      console.log("UPDATEREF RES: ", res)
      dispatch({ type: UPDATEREF_SUCCESS, payload: res.data.reflections});
    })
    .catch(err => {
      console.log("UPDATEREF ERR: ", err)
      dispatch({ type: UPDATEREF_FAILURE});
    });
};


export const getReflectionsById = (id) => (dispatch) => {
  dispatch ({type: GETUSERREFS_START})
  axiosAuth()
  .get(`https://dyl-backend.herokuapp.com/api/weekly/${id}`)
  .then(res => {
      console.log("GETUSERREFS RES: ", res)
      dispatch({type: GETUSERREFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
      console.log("GETUSERREFS ERR: ", err)
      dispatch({type: GETUSERREFS_FAILURE})
  })
}

export const deleteRef = (id, user_id) => dispatch => {
  dispatch({ type: DELETEREF_START });
  axiosAuth()
    .delete(`https://dyl-backend.herokuapp.com/api/reflections/${id}`)
    .then(res => {
      console.log("DELETE REF RES: ", res)
      dispatch({ type: DELETEREF_SUCCESS});
    })
    .catch(err => {
      console.log("DELETE REF ERR: ", err)
      dispatch({ type: DELETEREF_FAILURE});
    });
};

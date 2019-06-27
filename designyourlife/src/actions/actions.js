import axios from 'axios';
import axiosAuth from '../utils/axiosAuth'
import moment from 'moment';


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

export const NEW_CYCLE_UPDATE_START = 'NEW_CYCLE_UPDATE_START';
export const NEW_CYCLE_UPDATE_SUCCESS = 'NEW_CYCLE_UPDATE_SUCCESS';
export const NEW_CYCLE_UPDATE_FAILURE = 'NEW_CYCLE_UPDATE_FAILURE';


export const CREATELOG_START = 'CREATELOG_START';
export const CREATELOG_SUCCESS = 'CREATELOG_SUCCESS';
export const CREATELOG_FAILURE = 'CREATELOG_FAILURE';

export const CREATELOGENTRY_START = 'CREATELOGENTRY_START';
export const CREATELOGENTRY_SUCCESS = 'CREATELOGENTRY_SUCCESS';
export const CREATELOGENTRY_FAILURE = 'CREATELOGENTRY_FAILURE';

export const GETCYCLEDATE_START = 'GETCYCLEDATE_START';
export const GETCYCLEDATE_SUCCESS = 'GETCYCLEDATE_SUCCESS';
export const GETCYCLEDATE_FAILURE = 'GETCYCLEDATE_FAILURE';



export const GETWEEKNUMBER_START = 'GETWEEKNUMBER_START';
export const GETWEEKNUMBER_SUCCESS = 'GETWEEKNUMBER_SUCCESS';
export const GETWEEKNUMBER_FAILURE = 'GETWEEKNUMBER_FAILURE';

export const WEEKNUMBERUPDATE_START = 'WEEKNUMBERUPDATE_START';
export const WEEKNUMBERUPDATE_SUCCESS = 'WEEKNUMBERUPDATE_SUCCESS';
export const WEEKNUMBERUPDATE_FAILURE = 'WEEKNUMBERUPDATE_FAILURE';


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
  console.log("getPostsByUserId user_id:", user_id)
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
      dispatch({type: GET1_SUCCESS})
  })
  .catch(err => {
      console.log("GET1 ERR: ", err)
      dispatch({type: GET1_FAILURE})
  })
}


//add ID to arg
export const newPost = (postObj, id) => dispatch => {
  console.log("postObj: ", postObj)
  console.log("post user_id: ", id)
  dispatch({ type: POST_START });
  axiosAuth()
    .post('https://dyl-backend.herokuapp.com/api/posts', postObj, id)
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
  console.log("id: ", id)
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
  console.log("Delete id: ", id, "User_id: ", user_id)
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



//getEndOfWeekCycle

export const getCycleDate = () => (dispatch) => {
  dispatch ({type: GETCYCLEDATE_START})
  axiosAuth()
  .get('https://dyl-backend.herokuapp.com/api/cycle')
  .then(res => {
      console.log("GETCYCLEDATE RES: ", res)
      dispatch({type: GETCYCLEDATE_SUCCESS})
  })
  .catch(err => {
      console.log("GETCYCLEDATE ERR: ", err)
      dispatch({type: GETCYCLEDATE_FAILURE})
  })
}


export const updateEndOfWeekCycle = () => dispatch => {
  console.log("NEW CYCLE: ", moment().add(7, 'days').calendar())
  dispatch({ type: NEW_CYCLE_UPDATE_START });
  axiosAuth()
    .put(`https://dyl-backend.herokuapp.com/api/cycle`, moment().add(7, 'days').calendar())
    .then(res => {
      console.log("NEW CYCLE UPDATE RES: ", res)
      dispatch({ type: NEW_CYCLE_UPDATE_SUCCESS});
    })
    .catch(err => {
      console.log("NEW CYCLE UPDATE ERR: ", err)
      dispatch({ type: NEW_CYCLE_UPDATE_FAILURE});
    });
};

//get weekNumber

export const getWeekNumber = () => (dispatch) => {
  dispatch ({type: GETWEEKNUMBER_START})
  axiosAuth()
  .get('https://dyl-backend.herokuapp.com/api/time')
  .then(res => {
      console.log("GETWEEKNUMBER RES: ", res)
      dispatch({type: GETWEEKNUMBER_SUCCESS})
  })
  .catch(err => {
      console.log("GETWEEKNUMBER ERR: ", err)
      dispatch({type: GETWEEKNUMBER_FAILURE})
  })
}


export const updateWeekNumber = (updatedWeekNumber) => dispatch => {
  console.log("NEW WEEKNUMBER: ", updatedWeekNumber)
  dispatch({ type: WEEKNUMBERUPDATE_START });
  axiosAuth()
    .put(`https://dyl-backend.herokuapp.com/api/time`, 2)
    .then(res => {
      console.log("WEEK NUMBER UPDATE RES: ", res)
      dispatch({ type: WEEKNUMBERUPDATE_SUCCESS});
    })
    .catch(err => {
      console.log("WEEK NUMBER UPDATE ERR: ", err)
      dispatch({ type: WEEKNUMBERUPDATE_FAILURE});
    });
};




export const createLog = () => dispatch => {
  dispatch({ type: CREATELOG_START });
  let newLog = []
  axiosAuth()
    .post('URL_TO_LOGS_ARRAY', newLog)
    .then(res => {
      console.log("CREATELOG RES: ", res)
      dispatch({ type: CREATELOG_SUCCESS}); //<-----PAYLOAD IS ENTIRE LOGS ARRAY
    })
    .catch(err => {
      console.log("CREATELOG ERR: ", err)
      dispatch({ type: CREATELOG_FAILURE});
    });
};

export const createLogEntry = (idToBePosted, currentLogNumber) => dispatch => {
  dispatch({ type: CREATELOGENTRY_START });
  
  axiosAuth()
    .post(`URL_TO_LOG_WITH_${currentLogNumber}`, idToBePosted)
    .then(res => {
      console.log("CREATELOGENTRY RES: ", res)
      dispatch({ type: CREATELOGENTRY_SUCCESS}); //<-----PAYLOAD IS ENTIRE LOGS ARRAY
    })
    .catch(err => {
      console.log("CREATELOGENTRY ERR: ", err)
      dispatch({ type: CREATELOGENTRY_FAILURE});
    });
};


import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    GET_START, GET_SUCCESS, GET_FAILURE,
    GET1_START, GET1_SUCCESS, GET1_FAILURE,
    POST_START, POST_SUCCESS, POST_FAILURE,
    GETUSERPOSTS_START, GETUSERPOSTS_SUCCESS, GETUSERPOSTS_FAILURE,
    UPDATE_START, UPDATE_SUCCESS, UPDATE_FAILURE,
    DELETE_START, DELETE_SUCCESS, DELETE_FAILURE} from '../actions/actions';





let defaultState = {
    username: "",
    user_id: "",
    posts: [],
    post: [],
    loggingIn: false,
    loggingInError: "",
    registering: false,
    registeringError: "",
    gettingUserPosts: false,
    gettingUserPostsError: "",


    

}

export default function reducer (state = defaultState, action) {
   switch(action.type){
        case LOGIN_START:
           return {
               ...state,
               loggingIn: true

           }
        case LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                user_id: action.payload.id,
                loggingIn: false,
                loggingInError: ""
            }           
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingInError: "Login failed",
                loggingIn: false
            }   
        //################################
        case REGISTER_START:
            return {
                ...state,
                registering: true,
            }           
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
            }           
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                registeringError: "Register error!"
            }     
        //################################
        case GET_START:
            return {
                ...state
            }           
        case GET_SUCCESS:
            return {
                ...state
            }           
        case GET_FAILURE:
                return {
                    ...state
                }
        //################################
        case GETUSERPOSTS_START:
            return {
                ...state,
                gettingUserPosts: true
            }           
        case GETUSERPOSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                gettingUserPosts: false
            }           
        case GETUSERPOSTS_FAILURE:
            return {
                ...state,
                gettingUserPosts: false
            }           
        //################################
        case GET1_START:
            return {
                ...state
            }           
        case GET1_SUCCESS:
            return {
                ...state,
                
            }           
        case GET1_FAILURE:
                return {
                    ...state
                }      
        //################################
        case POST_START:
                return {
                    ...state
                }           
        case POST_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }           
        case POST_FAILURE:
                return {
                    ...state
                }
        //################################
        case UPDATE_START:
            return {
                ...state
            }           
        case UPDATE_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }           
        case UPDATE_FAILURE:
                return {
                    ...state
                }

         //################################
         case DELETE_START:
            return {
                ...state
            }           
        case DELETE_SUCCESS:
            return {
                ...state
            }           
        case DELETE_FAILURE:
                return {
                    ...state
                }
         //################################
    
        default:
            return state;
    }
        
}
   

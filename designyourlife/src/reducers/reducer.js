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
    posts: [],
    post: []
}

export default function reducer (state = defaultState, action) {
   switch(action.type){
        case LOGIN_START:
           return {
               ...state
           }
        case LOGIN_SUCCESS:
            return {
                ...state
            }           
        case LOGIN_FAILURE:
            return {
                ...state
            }   
        //################################
        case REGISTER_START:
            return {
                ...state
            }           
        case REGISTER_SUCCESS:
            return {
                ...state
            }           
        case REGISTER_FAILURE:
            return {
                ...state
            }     
        //################################
        case GET_START:
            return {
                ...state
            }           
        case GET_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }           
        case GET_FAILURE:
                return {
                    ...state
                }
        //################################
        case GETUSERPOSTS_START:
            return {
                ...state
            }           
        case GETUSERPOSTS_SUCCESS:
            return {
                ...state,
                post: action.payload
            }           
        case GETUSERPOSTS_FAILURE:
                return {
                    ...state
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
                ...state
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
                ...state
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
   

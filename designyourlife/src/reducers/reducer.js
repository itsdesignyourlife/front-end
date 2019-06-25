import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    GET_START, GET_SUCCESS, GET_FAILURE} from '../actions/actions';





let defaultState = {
    posts: []
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
        default:
            return state;
    }
        
}
   

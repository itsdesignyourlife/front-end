import {AN_ACTION} from '../actions/actions';

let defaultState = {
    
}

export default function reducer (state = defaultState, action) {
   switch(action.type){
       case AN_ACTION:
           return {
               ...state
           }
        default:
            return state;
   }
   
}
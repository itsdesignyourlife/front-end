import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
import moment from 'moment';


class ReflectionLog extends Component {
    state = {
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
    }

    timeStampCreator(){
        let date = new Date()
      
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        let hour = (date.getHours() > 12)?(date.getHours() - 12):(date.getHour);
        let minutes = date.getMinutes();
        let ampm =  (date.getHours() > 12)?("pm"):("am")
      
        let timeStamp = `${month}/${day}/${year} at ${hour}:${minutes}${ampm}`
      
        return timeStamp
      }
      
    timeStampTest(){
        console.log(moment().subtract(7, 'days').calendar()) //mm/dd/yyyy past
        console.log(moment().format('L')) //mm/dd/yyyy current
        console.log(moment().add(7, 'days').calendar()) // mm/dd/yyyy in 1 week
    }

    isDateLaterThanCDate(date, cDate) {
        //input date format: dd/mm/yyyy
        let dateSplit = date.split("/");
        //=====================
        let mm = dateSplit[0];
        let dd = dateSplit[1];
        let yyyy = dateSplit[2];
        //====================
        let cDateSplit = cDate.split("/");
        //=====================
        let cmm = cDateSplit[0];
        let cdd = cDateSplit[1];
        let cyyyy = cDateSplit[2];
        //======================
        if(yyyy > cyyyy){
          return true
        } else if (yyyy === cyyyy && mm > cmm){
          return true
        } else if (yyyy === cyyyy && mm === cmm && dd > cdd) {
          return true
        } else {
          return false
        }
    }

    


    render(){
        return(
            <div>
                <h1>REFLECTION LOG</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts,
        user_id: state.user_id,
        username: state.username,
    }
}     

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost})(ReflectionLog);
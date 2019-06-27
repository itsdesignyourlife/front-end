import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost,  createLog, createLogEntry, getCycleDate, updateEndOfWeekCycle, getWeekNumber, updateWeekNumber} from '../actions/actions';
import moment from 'moment';

class ActivityLogForm extends Component {
    state = {
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
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


    componentDidUpdate(){
        //reflectionLogPostIds arrays Assignment
        
        this.props.getCycleDate(1)
        
        if (this.props.endOfWeekCycle === ""){
            console.log("UPDATE CYCLE DATE TRIGGER")
            this.props.updateEndOfWeekCycle(1)
        }

        //--------------------------------
        if (this.props.weekNumber === 0 || this.isDateLaterThanCDate(this.props.endOfWeekCycle, moment().format('L'))){
            let newWeekNumber = this.props.weekNumber + 1
            this.props.updateWeekNumber()
        }
        // if (this.props.weekNumber === 0){
        //     return null
        // }else{
        //     if (this.props.latestLog[this.props.latestLog.length -1] !== this.props.posts[this.props.posts.length -1].id){
        //         let idToBePosted = this.props.posts[this.props.posts.length -1].id
        //         let currentLogNumber = this.props.logs.length
        //         this.props.createLogEntry(idToBePosted, currentLogNumber)
        //     }
        // }
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   

    timeStampTest(){
        console.log(moment().subtract(7, 'days').calendar()) // mm/dd/yyyy past
        console.log(moment().format('L')) // mm/dd/yyyy current
        console.log(moment().add(7, 'days').calendar()) // mm/dd/yyyy future 
    }


    newPost = e => {
        e.preventDefault()
        let postObj = {
            username: localStorage.getItem('username'),
            user_id: parseInt(this.props.user_id, 10),
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            engagementScore: parseInt(this.state.engagementScore, 10),
            energyScore: parseInt(this.state.energyScore, 10),
            // createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
            postTime:moment().format('LT'),
            postDate: moment().format('L'),
            weekNumber: 0
        }
        console.log("POST TRIGGERED")
        this.props.newPost(postObj, parseInt(this.props.user_id, 10),)
        this.setState({
            id: "",
            user_id: "",
            postTitle: "",
            postBody: "",
            engagementScore: "",
            energyScore: ""
        })
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

  


    render(){
        return(
            <div className = "formMainContainer">
                <div className = "activityLogForm">
                    <div className = "inputContainer">
                        <div>
                            <input
                                type = "text"
                                placeholder = "postTitle"
                                name = "postTitle"
                                value = {this.state.postTitle}
                                onChange = {this.changeHandler}
                            />
                            <input
                                type = "number"
                                placeholder = "engagementScore"
                                name = "engagementScore"
                                value = {this.state.engagementScore}
                                onChange = {this.changeHandler}
                            />
                            <input
                                type = "number"
                                placeholder = "energyScore"
                                name = "energyScore"
                                value = {this.state.energyScore}
                                onChange = {this.changeHandler}
                            />
                        </div>
                        <div>
                            <input
                                type = "text"
                                placeholder = "postBody"
                                name = "postBody"
                                value = {this.state.postBody}
                                onChange = {this.changeHandler}
                            />
                        </div>
                    </div>
                    <div>
                         <button onClick = {this.newPost}>POST!</button>
                    </div>
                </div>
                

              

                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts,
        user_id: state.user_id,
        username: state.username,
        endOfWeekCycle: state.endOfWeekCycle,
        weekNumber: state.weekNumber,
        
    }
}     

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost, createLog, createLogEntry, getCycleDate,  updateEndOfWeekCycle, getWeekNumber, updateWeekNumber})(ActivityLogForm);
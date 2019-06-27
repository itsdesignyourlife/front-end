import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
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


    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
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
            createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
        console.log("POST TRIGGERED")
        this.props.newPost(postObj, parseInt(this.props.user_id, 10),)
        // console.log("GET USER POSTS TRIGGERED")
        // this.props.getPostsByUserId(this.props.user_id)
       
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

      timeStampTest(){
        let timestamp = `${moment().format('MMMM Do YYYY, h:mm:ss a')}`
        console.log(timestamp)
    }


    render(){
        return(
            <div>
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
    }
}     

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost})(ActivityLogForm);
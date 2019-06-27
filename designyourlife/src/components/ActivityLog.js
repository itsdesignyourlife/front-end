import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
import moment from 'moment';
import ActivityLogForm from './ActivityLogForm';
import ActivityLogPosts from './ActivityLogPosts';

class ActivityLog extends Component {
    state = {
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
    }

    // componentDidMount(){
    //     console.log("GET USER POSTS TRIGGERED")
    //     this.props.getPostsByUserId(localStorage.getItem('user_id'))
    // }

    getPostsByUserid = e => {
        e.preventDefault()
        this.props.getPostsByUserId(this.state.user_id)
        this.setState({
            user_id: ""
        })
    }

    getPostById = e => {
        e.preventDefault()
        this.props.getPostById(this.state.id)
        this.setState({
            id: ""
        })
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
            //username: needs to be added, pending addition to server DB
            user_id: parseInt(this.props.user_id, 10),
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            engagementScore: parseInt(this.state.engagementScore, 10),
            energyScore: parseInt(this.state.energyScore, 10),
            createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
        console.log("POST TRIGGERED")
        this.props.newPost(postObj)
        console.log("GET USER POSTS TRIGGERED")
        this.props.getPostsByUserId(this.props.user_id)
        this.setState({
            id: "",
            user_id: "",
            postTitle: "",
            postBody: "",
            engagementScore: "",
            energyScore: ""
        })
    }

    updatePost = e => {
        console.log("UPDATE TRIGGERED")
        e.preventDefault()
        let updateId = parseInt(this.state.id, 10);
        let postObj = {
            user_id: parseInt(this.state.user_id, 10),
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            engagementScore: parseInt(this.state.engagementScore, 10),
            energyScore: parseInt(this.state.energyScore, 10)
        }
        this.props.updatePost(updateId, postObj)
        this.setState({
            id: "",
            user_id: "",
            postTitle: "",
            postBody: "",
            engagementScore: "",
            energyScore: ""
        })
    }

    deletePost = e => {
        console.log("DELETE TRIGGERED")
        e.preventDefault()
        let deleteId = parseInt(this.state.id, 10);
        this.props.deletePost(deleteId)
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
                {/* 
                //TESTING VVVVVV
                <h1>ALL POSTS ALREADY LOADED IN CONSOLE</h1>
                <h1>GET POSTS BY USER ID</h1>
                <input 
                    type = "number"
                    placeholder = "user_id"
                    name = "user_id"
                    value = {this.state.user_id}
                    onChange = {this.changeHandler}
                />
                <button onClick = {this.getPostsByUserid} >Search by id</button>

                <h1>Get Individual Post By Post ID</h1>
                <input
                    type = "number"
                    placeholder = "id"
                    name = "id"
                    value = {this.state.id}
                    onChange = {this.changeHandler}
                />
                <button onClick = {this.getPostById}>SUBMIT</button>

                <h1>New post</h1>
                <input
                    type = "number"
                    placeholder = "user_id"
                    name = "user_id"
                    value = {this.state.user_id}
                    onChange = {this.changeHandler}
                 />
                <input
                    type = "text"
                    placeholder = "postTitle"
                    name = "postTitle"
                    value = {this.state.postTitle}
                    onChange = {this.changeHandler}
                 />
                 <input
                    type = "text"
                    placeholder = "postBody"
                    name = "postBody"
                    value = {this.state.postBody}
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
                 
                 <button onClick = {this.newPost}>POST!</button>
                 <button onClick = {this.updatePost}>UPDATE!</button>
                 <button onClick = {this.deletePost}>DELETE</button>
                 
                 <h2>Post ID for update and delete</h2>
                 <input
                    type = "number"
                    placeholder = "postID for update only"
                    name = "id"
                    value = {this.state.id}
                    onChange = {this.changeHandler}
                 />
                <button onClick = {this.timeStampTest}>TEST TIMESTAMP</button> */}
                <ActivityLogForm />
                <ActivityLogPosts />
                

                <div className = "posts">

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

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost})(ActivityLog);
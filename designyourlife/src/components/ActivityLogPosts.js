import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
import moment from 'moment';
import Post from './Post';

class ActivityLogPosts extends Component {
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
                <div className = "posts">
                   {this.props.posts.map(post => {
                       return (
                           <div key = {Math.random()}>
                               <Post post = {post} />
                            </div>
                       )
                   })}
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

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost})(ActivityLogPosts);
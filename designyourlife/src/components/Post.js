import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
import moment from 'moment';

class Post extends Component {
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
        let deleteId = parseInt(this.props.post.id, 10);
        this.props.deletePost(deleteId)
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
            <div className = "post">
                    <div>
                        <div>
                            <h1>POST</h1>
                            <h4>{this.props.post.postTitle}</h4>
                            <h5>{this.props.post.engagementScore}</h5>
                            <h5>{this.props.post.energyScore}</h5>
                        </div>
                        <div>
                            <div>
                                {this.props.post.postBody}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick = {this.updatePost}>UPDATE!</button>
                        <button onClick = {this.deletePost}>DELETE</button>
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

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost})(Post);
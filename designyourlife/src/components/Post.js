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
        let updateId = parseInt(this.props.post.id, 10);
        let postObj = {
            username: localStorage.getItem('username'),
            user_id: parseInt(this.props.user_id, 10),
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            engagementScore: parseInt(this.state.engagementScore, 10),
            energyScore: parseInt(this.state.energyScore, 10),
            createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
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
        let deleteId = parseInt(this.props.post.id, 10); //props passed from ActivityLog
        this.props.deletePost(deleteId, this.props.user_id)
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
        console.log("timeStap: ",timeStamp)
        return timeStamp
      }
      
    timeStampTest(){
        console.log(moment().subtract(7, 'days').calendar()) // mm/dd/yyyy past
        console.log(moment().format('L')) // mm/dd/yyyy current
        console.log(moment().add(7, 'days').calendar()) // mm/dd/yyyy future 
    }


    render(){
        

        return(
            <div className = "post">
                <div>
                    <div>
                        <h1>POST</h1>
                        <h4>POST TITLE: {this.props.post.postTitle}</h4>
                        <h5>ENGAGEMENT: {this.props.post.engagementScore}</h5>
                        <h5>ENERGY: {this.props.post.energyScore}</h5>
                        <h5>USER_ID: {this.props.post.user_id}</h5>
                        <h5>ID: {this.props.post.id}</h5>
                        <h5>TIMESTAMP: {moment().format('L')}</h5>
                    </div>
                    <div>
                        <div>
                            {this.props.post.postBody}
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick = {this.deletePost}>DELETE</button>
                </div>
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
                <button onClick = {this.updatePost}>UPDATE!</button>
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
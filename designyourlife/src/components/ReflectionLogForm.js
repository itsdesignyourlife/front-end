import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost, newRefPost} from '../actions/actions';
import moment from 'moment';

class ReflectionLogForm extends Component {
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
            postTime:moment().format('LT'),
            postDate: moment().format('L')
        }
        console.log("REFLECTION POST TRIGGERED")
        this.props.newRefPost(postObj)
        this.setState({
            id: "",
            user_id: "",
            postTitle: "",
            postBody: "",
            engagementScore: "",
            energyScore: ""
        })
    }



    render(){
        return (
        <div>
            <div className="activityLogForm inputContainer">
            <h1>Reflection Log</h1>
            <div className="inputContainer">
                <div className="form"> 
                <input
                    type="text"
                    placeholder="Describe this week in three words"
                    name="postTitle"
                    value={this.state.postTitle}
                    onChange={this.changeHandler}
                />
                </div>
                <div className="form form2">
                <input
                    type="text"
                    placeholder="Given your results this week, what will you do more next week?"
                    name="postBody"
                    value={this.state.postBody}
                    onChange={this.changeHandler}
                />
                </div>
            </div>
            <div className="buttonDiv">
                <button
                className="button"
                onClick={this.newPost}
                >
                POST!
                </button>
            </div>
            </div>
        </div>
        );
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

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost, newRefPost})(ReflectionLogForm);
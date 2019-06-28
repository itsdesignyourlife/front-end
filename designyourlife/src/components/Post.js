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
        energyScore: "",
        updateView: false,

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
            // createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
            postTime: "jdkhf",
            postDate: "qelh"
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

    updateViewToggle = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            updateView: !this.state.updateView
        })
        console.log(this.state.updateView)
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
        setTimeout(() => {this.props.getPostsByUserId(localStorage.getItem('user_id'))}, 250);
        
    }

    
      
    timeStampTest(){
        console.log(moment().subtract(7, 'days').calendar()) // mm/dd/yyyy past
        console.log(moment().format('L')) // mm/dd/yyyy current
        console.log(moment().add(7, 'days').calendar()) // mm/dd/yyyy future 
    }


 

    // DORA VVVV


    render(){
        return (
        <div className="post inputContainer">
            <div className = "postContent">
                
                {this.state.updateView ? (
                    <div className="inputContainer">
                    <div className="form">
                        <input
                            type="text"
                            placeholder="What did you do?"
                            name="postTitle"
                            value={this.state.postTitle}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="number"
                            placeholder="How engaged were you in the activity?"
                            name="engagementScore"
                            value={this.state.engagementScore}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="number"
                            placeholder="How energized did you feel?"
                            name="energyScore"
                            value={this.state.energyScore}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="text"
                            placeholder="Comments"
                            name="postBody"
                            value={this.state.postBody}
                            onChange={this.changeHandler}
                        />
                        <button className = "button" onClick = {this.updatePost}>Submit update</button>
                    </div>
                </div>
                ) : (
                    <div className="inputContainer ">
                        <h3>{this.props.post.postTitle}</h3>
                        <h5>Engagement score: {this.props.post.engagementScore}</h5>
                        <h5>Energy score: {this.props.post.energyScore}</h5>
                        <div>{this.props.post.postBody}</div>
                    </div>
                )}
                
                
                
                
                
            </div>
            <div className="buttons">
                <button className="button" onClick={this.deletePost}>Delete</button>
                <button className="button" onClick={this.updateViewToggle}>{this.state.updateView ? "Cancel" : "Update"}</button>
            </div>
        </div>
        );
    }
}

//UPDATE FORM
{/* <div className="inputContainer">
                <div className="form">
                    <input
                    type="text"
                    placeholder="Title"
                    name="postTitle"
                    value={this.state.postTitle}
                    onChange={this.changeHandler}
                    />
                    <input
                    type="number"
                    placeholder="Engagement Score"
                    name="engagementScore"
                    value={this.state.engagementScore}
                    onChange={this.changeHandler}
                    />
                    <input
                    type="number"
                    placeholder="Energy Score"
                    name="energyScore"
                    value={this.state.energyScore}
                    onChange={this.changeHandler}
                    />
                </div>
                <div className="form">
                    <input
                    type="text"
                    placeholder="Post"
                    name="postBody"
                    value={this.state.postBody}
                    onChange={this.changeHandler}
                    />
                </div>
            </div> */}



function mapStateToProps(state){
    return {
        posts: state.posts,
        user_id: state.user_id,
        username: state.username,
    }
}     

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost})(Post);
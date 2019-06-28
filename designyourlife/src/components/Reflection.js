import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {deleteRef, updateRefPost, getReflectionsById} from '../actions/actions';
import moment from 'moment';

class Reflection extends Component {
    state = {
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        updateView: false,
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updatePost = e => {
        console.log("UPDATE REF TRIGGERED")
        e.preventDefault()
        let updateId = parseInt(this.props.reflection.id, 10);
        let postObj = {
            username: localStorage.getItem('username'),
            user_id: parseInt(this.props.user_id, 10),
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            postTime: "jdkhf",
            postDate: "qelh"
        }
        this.props.updateRefPost(updateId, postObj)
        this.setState({
            id: "",
            user_id: "",
            postTitle: "",
            postBody: "",
        })
    }

    deletePost = e => {
        console.log("DELETE REF TRIGGERED")
        e.preventDefault()
        let deleteId = parseInt(this.props.reflection.id, 10); //props passed from ActivityLog
        this.props.deleteRef(deleteId, this.props.user_id)
        this.setState({
            id: "",
            user_id: "",
            postTitle: "",
            postBody: "",
            engagementScore: "",
            energyScore: ""
        })
        setTimeout(() => {this.props.getReflectionsById(this.props.user_id)}, 250);
    }

    updateViewToggle = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            updateView: !this.state.updateView
        })
        console.log("TOGGLED!")
        console.log(this.state.updateView)
    }
   
    render(){
        return (
        <div className="post inputContainer">
            <div>
                {this.state.updateView ? (
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
                        <div className="form">
                            <input
                                type="text"
                                placeholder="Given your results this week, what will you do more next week?"
                                name="postBody"
                                value={this.state.postBody}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <button className = "button" onClick = {this.updatePost}>Submit update</button>
                    </div>
                ) : (
                    <div className="inputContainer">
                        <h2>{this.props.reflection.postTitle}</h2>
                        <div>Next week I will... {this.props.reflection.postBody}</div>
                        <div>{moment().format('L')}</div>
                    </div>
                )}  
            </div>
            <div className="buttons">
                <button className="button" onClick={this.deletePost}>DELETE</button>
                <button className="button" onClick={this.updateViewToggle}> {this.state.updateView ? "Cancel" : "Update"} </button>
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
    }
}     

export default connect(mapStateToProps, {deleteRef, updateRefPost, getReflectionsById})(Reflection);
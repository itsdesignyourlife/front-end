import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost, getReflectionsById} from '../actions/actions';
import ReflectionLogForm from './ReflectionLogForm';
import ReflectionLogPosts from './ReflectionLogPosts';

class ReflectionLog extends Component {
    state = {
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
    }

    componentDidMount(){
        console.log("CDM GET", this.props.user_id)
        this.props.getReflectionsById(this.props.user_id)
    }

    componentDidUpdate(){
        console.log("CDU GET")
        this.props.getReflectionsById(this.props.user_id)
    }

    render(){
        return(
            <div className = "ReflectionLog">
                <ReflectionLogForm />
                <ReflectionLogPosts />
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

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost, getReflectionsById})(ReflectionLog);
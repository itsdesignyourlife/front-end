import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
import moment from 'moment';
import Post from './Post';

class ActivityLogPosts extends Component {
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

export default connect(mapStateToProps, {})(ActivityLogPosts);
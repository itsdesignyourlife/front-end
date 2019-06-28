import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
import moment from 'moment';
import ActivityLog from './ActivityLog';
import Nav from './Nav';
import ReflectionLog from './ReflectionLog';

class User extends Component {
    state = {
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: "",

        reflectionView: false,
    }

    componentDidMount(){
        this.props.getPostsByUserId(localStorage.getItem('user_id'))
    }

    reflectionViewToggle = (bool) => {
        this.setState({
            ...this.state,
            reflectionView: bool
        })
    }


    render(){
        return(
            <div className = "userMainContainer">
                <Nav reflectionViewToggle = {this.reflectionViewToggle} />
                {this.state.reflectionView ? (
                    <ReflectionLog />
                ) : (
                    <ActivityLog />
                )}
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

export default connect(mapStateToProps, {getPostsByUserId})(User);

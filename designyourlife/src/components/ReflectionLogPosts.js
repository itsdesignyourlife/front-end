import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost, updatePost, deletePost} from '../actions/actions';
import moment from 'moment';
import Reflection from './Reflection';

class ReflectionLogPosts extends Component {
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

  

   
      
     


    render(){
        console.log("user_id: ", this.props.user_id)
        return(
            <div>
                <div className = "reflections">
                   {this.props.reflections.map(reflection => {
                       return (
                           <div key = {Math.random()}>
                               <Reflection reflection = {reflection} />
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
        reflections: state.reflections,
        user_id: state.user_id,
        username: state.username,
    }
}     

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById, updatePost, deletePost})(ReflectionLogPosts);
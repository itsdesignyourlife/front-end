import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsByUserId, getPostById, newPost} from '../actions/actions';

class User extends Component {
    state = {
        id: "",
        user_id: "",
        postTitle: "",
        postBody: "",
        engagementScore: "",
        energyScore: ""
    }

    componentDidMount(){
        this.props.getPosts()
    }

    getPostsByUserid = e => {
        e.preventDefault()
        this.props.getPostsByUserId(this.state.user_id)
        this.setState({
            user_id: ""
        })
    }

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

    newPost = e => {
        e.preventDefault()
        let postObj = {
            user_id: parseInt(this.state.user_id, 10),
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            engagementScore: parseInt(this.state.engagementScore, 10),
            energyScore: parseInt(this.state.energyScore, 10)
        }
        this.props.newPost(postObj)
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
        return(
            <div>
                {/* {this.props.posts.map(post => {
                    return (
                        <div key = {Math.random()}>
                            <h1>{post.id}</h1>
                        </div>
                    )
                })} */}
                <h1>GET POSTS BY USER ID TEST</h1>
                <input 
                    type = "text"
                    placeholder = "user_id"
                    name = "user_id"
                    value = {this.state.user_id}
                    onChange = {this.changeHandler}
                />
                <button onClick = {this.getPostsByUserid} >Search by id</button>

                <h1>GET POST BY POST ID</h1>
                <input
                    type = "text"
                    placeholder = "id"
                    name = "id"
                    value = {this.state.id}
                    onChange = {this.changeHandler}
                />
                <button onClick = {this.getPostById}>SUBMIT</button>

                <h1>NEW POST TEST</h1>
                <input
                    type = "number"
                    placeholder = "user_id"
                    name = "user_id"
                    value = {this.state.user_id}
                    onChange = {this.changeHandler}
                 />
                <input
                    type = "text"
                    placeholder = "postTitle"
                    name = "postTitle"
                    value = {this.state.postTitle}
                    onChange = {this.changeHandler}
                 />
                 <input
                    type = "text"
                    placeholder = "postBody"
                    name = "postBody"
                    value = {this.state.postBody}
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
                 <button onClick = {this.newPost}>POST!</button>
                 
                
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {getPosts, getPostsByUserId, newPost, getPostById})(User);
import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getPostsById} from '../actions/actions';

class User extends Component {
    state = {
        id: ""
    }

    componentDidMount(){
        this.props.getPosts()
    }

    idSubmit = id => {
        this.props.getPostsById(this.state.id)
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
                <input 
                    type = "text"
                    placeholder = "requestedId"
                    name = "id"
                    value = {this.state.id}
                    onChange = {this.changeHandler}
                />
                <button onClick = {this.idSubmit} >Search by id</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {getPosts, getPostsById})(User);
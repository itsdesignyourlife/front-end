import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getPosts} from '../actions/actions';

class User extends Component {
    state = {

    }

    componentDidMount(){
        this.props.getPosts()
    }

    render(){
        return(
            <div>
                {this.props.posts.map(post => {
                    return (
                        <div key = {Math.random()}>
                            <h1>{post.id}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {getPosts})(User);
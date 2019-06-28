import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
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


    render(){
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
        reflections: state.reflections
    }
}     

export default connect(mapStateToProps, {})(ReflectionLogPosts);
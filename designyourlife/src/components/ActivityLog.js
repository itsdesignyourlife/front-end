import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import ActivityLogForm from './ActivityLogForm';
import ActivityLogPosts from './ActivityLogPosts';

class ActivityLog extends Component {
   
    render(){
        return(
            <div className = "ActivityLog">
                <ActivityLogForm />
                <ActivityLogPosts />  
            </div>
        )
    }
}

function mapStateToProps(state){
    return {}
}     

export default connect(mapStateToProps, {})(ActivityLog);
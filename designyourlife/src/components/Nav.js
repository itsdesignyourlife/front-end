import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";



class Nav extends Component {
    

    preventRefresh = e => {
        e.preventDefault()
        window.location.href = 'https://designyourlifejournal.netlify.com/';
    }

    activityLogSwitch = e => {
        e.preventDefault()
        this.props.reflectionViewToggle(false)
    }

    reflectionLogSwitch = e => {
        e.preventDefault()
        this.props.reflectionViewToggle(true)
    }

    logOut = e => {
        e.preventDefault()
        localStorage.clear();
        window.location.reload();
    }

    
    render(){
        return (
          <div className="nav">
                <h2 className="loginHeader">Good Time Journal</h2>
                <div className="navigation-bar">
                    <button className="button" onClick = {this.preventRefresh}>
                    Main Page
                    </button>
                    <button className="button" onClick={this.activityLogSwitch}>
                    Daily Activity Log
                    </button>
                    <button className="button" onClick={this.reflectionLogSwitch}>
                    Weekly Reflection Log
                    </button>
                    <button className = "button" onClick = {this.logOut}>Logout</button>
                </div>
          </div>
        );
    }
}

function mapStateToProps(state){
    return {
   
    }
}

export default connect(mapStateToProps, {})(Nav);

import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";



class Nav extends Component {
    

    preventRefresh = e => {
        e.preventDefault()
    }

    activityLogSwitch = e => {
        e.preventDefault()
        this.props.reflectionViewToggle(false)
    }

    reflectionLogSwitch = e => {
        e.preventDefault()
        this.props.reflectionViewToggle(true)
    }

    


    // render(){
    //     console.log("NAV PROPS: ", this.props)
    //     return(
    //         <div className = "navMainContainer">
                 
    //             <button onClick = {this.preventRefresh}>Main Page</button>
    //             <button onClick = {this.activityLogSwitch}>Activity Log</button>
    //             <button onClick = {this.reflectionLogSwitch}>Reflection Log</button>

                
    //         </div>
    //     )
    // }
    render(){
        return (
          <div className="nav">
                <h2 className="loginHeader">Good Time Journal</h2>
                <div className="navigation-bar">
                    <button className="button" onClick = {this.preventRefresh}>
                    Main Page
                    </button>
                    <button className="button" onClick={this.activityLogSwitch}>
                    Activity Log
                    </button>
                    <button className="button" onClick={this.reflectionLogSwitch}>
                    Reflection Log
                    </button>
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

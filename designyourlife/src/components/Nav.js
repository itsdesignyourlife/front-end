import React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";



class Nav extends Component {
    

   preventRefresh = e => {
       e.preventDefault()
   }


    render(){
        return(
            <div className = "nav">
                 
                <a href = "#" onClick = {this.preventRefresh}>Main Page</a>
                <a href = "#" onClick = {this.preventRefresh}>Activity Log</a>
                <a href = "#" onClick = {this.preventRefresh}>Reflection Log</a>

                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
   
    }
}

export default connect(mapStateToProps, {})(Nav);

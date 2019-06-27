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
                 
                <button onClick = {this.preventRefresh}>Main Page</button>
                <button onClick = {this.preventRefresh}>Activity Log</button>
                <button onClick = {this.preventRefresh}>Reflection Log</button>

                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
   
    }
}

export default connect(mapStateToProps, {})(Nav);

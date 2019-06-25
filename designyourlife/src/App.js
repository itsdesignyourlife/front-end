import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';
import Login from './components/Login';
import User from './components/User';



function App() {
  return (
    <div>
      <h1>APP COMPONENT</h1>
      <Route path = "/login" component = {Login}/>
      <PrivateRoute exact path = "/" component = {User} />
    </div>
  );
}

export default App;

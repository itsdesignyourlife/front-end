import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';
import Login from './components/Login';
import User from './components/User';
import ReflectionLog from './components/ReflectionLog';



function App() {
  return (
    <div>
      <Route path = "/reflectionlog" component = {ReflectionLog}/>
      <Route path = "/login" component = {Login}/>
      <PrivateRoute exact path = "/" component = {User} />
    </div>
  );
}

export default App;

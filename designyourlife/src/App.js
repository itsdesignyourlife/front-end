import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';
import Login from './components/Login';
import User from './components/User';



function App() {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/public">Public Page</Link>
        </li> */}
        <li>
          <Link to="/user">User Page</Link>
        </li>
      </ul>
      {/* <Route path="/public" component={Public}/> */}
      <Route path="/login" component={Login}/>
      <PrivateRoute path='/user' component={User} />
    </div>
  );
}

export default App;

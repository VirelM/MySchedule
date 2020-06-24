import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import DashboardOwner from './DashboardOwner';
import Create from './CreateSchedules';
import SwapShift from './Swapshift';
import Notification from './Notification';
import PublicOnlyRoute from './Utils/PublicRouter';
// import PublicOnlyRoute from './Utils/PrivateRouter';

//import { render } from '@testing-library/react';

export default class App extends React.Component {
  navbar(){
      return(
        <nav>
          <Link to="/signup">signup</Link>
          <Link to="/login">login</Link>
        </nav>
      )
  }
  render(){
    return (
      <div className="App">
         
        {/* <Route exact path="/" render={()=>{
          return(<nav>
            <Link to="/signup">signup</Link>
            <Link to="/login">login</Link>
          </nav>)
        }}/> */}
        <PublicOnlyRoute exact path="/login" component={Login}/>
        <PublicOnlyRoute exact path="/" component={Signup}/>
        <PublicOnlyRoute exact path="/dashboard" component={Dashboard}/>
        <PublicOnlyRoute exact path="/dashboardowner" component={DashboardOwner}/>
        <PublicOnlyRoute exact path="/create" component={Create}/>
        <PublicOnlyRoute exact path="/swapshift" component={SwapShift}/>
        <PublicOnlyRoute exact path="/notification" component={Notification}/>
      </div>
    );
  }
}



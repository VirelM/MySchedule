import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import DashboardOwner from './DashboardOwner';
import Create from './CreateSchedules';
import SwapShift from './Swapshift';
import Notification from './Notification';
import PrivateOnlyRoute from './Utils/PrivateRouter';
import PublicOnlyRoute from './Utils/PublicRouter';
import { ScheduleProvider } from './ScheduleContext';

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
        <ScheduleProvider>
        <PublicOnlyRoute exact path="/login" component={Login}/>
        <PublicOnlyRoute exact path="/" component={Signup}/>
        <PrivateOnlyRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateOnlyRoute exact path="/dashboardowner" component={DashboardOwner}/>
        <PrivateOnlyRoute exact path="/create" component={Create}/>
        <PrivateOnlyRoute exact path="/swapshift" component={SwapShift}/>
        <PrivateOnlyRoute exact path="/notification" component={Notification}/>
        </ScheduleProvider>
      </div>
    );
  }
}



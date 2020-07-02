import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ScheduleApiService from './services/work_schedules-api';
import Table from './Table';
import TokenService from './services/token-service';


export default class Dashboard extends React.Component{
    state={
            "schedules":[]
    }
    componentDidMount(){
        console.log('goodbye')  
        ScheduleApiService.getSchedulesforUser()
            .then((res)=>{
                console.log(res)
                this.setState({"schedules":res})
            })
    }
    logout = ()=>{
        TokenService.clearAuthToken();
        // this.props.history.push('/login')
    }
    render(){
        console.log(this.state)
        let tables = this.state.schedules.map((Schedule)=><Table schedule={Schedule}/>)
        return(
            <div className="dash">
                <nav className="dashnav">
                    <NavLink to="/login" onClick={this.logout}>logout</NavLink>
                    {/* <div className="notifications">&#9993;</div>
                    <ul className="ulNotif">
                        <li>Kevin &#x21C4;</li>
                    </ul> */}
                </nav>
                <div className="table_container">
                <button className="prevTable">&lt;</button>
                
                {tables}
               
                <button className="nextTable">></button>
                </div>
                
                <Link to="/swapshift"><button className="clear">Request shift change</button></Link>
                <button>Pick up shift</button>
                
                <button>Confirm</button>
                <button>Cancel</button>
            </div>
        )
    }
}
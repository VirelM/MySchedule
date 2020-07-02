import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ScheduleApiService from './services/work_schedules-api';
import Dashboard from './Dashboard_copy';
import TokenService from './services/token-service';

export default class DashboardOwner extends React.Component{
    state={
        schedules:[],
        users:[]
    }
    componentDidMount(){
        console.log('hello')
        ScheduleApiService.getSchedules()
            .then((res)=>{
                console.log(res)
                this.setState({"schedules":res})
            })

        ScheduleApiService.getAllUsers()
            .then((res)=>{
                this.setState({"users":res})
            })

        
    }
    logout = ()=>{
        TokenService.clearAuthToken();
        // this.props.history.push('/login')
    }
    handleExpansion = (event) =>{
        console.log(event.target)
        let full_name = event.target.textContent;
        let clickedUser=this.state.users.find(user=>user.full_name===full_name);
        let users = this.state.users.filter(user=>user!==clickedUser);
        clickedUser['expanded']=true;
        console.log(clickedUser);
        this.setState({users:[clickedUser,...users]})
        
    }
    handleDExpansion = (event) =>{
        let full_name = event.target.textContent;
        let clickedUser = this.state.users.find(user=>user.full_name===full_name);
        let users = this.state.users.filter(user=>user!==clickedUser);
        clickedUser['expanded']=false;
        this.setState({users:[clickedUser,...users]})
    }
    create = ()=>{
        this.props.history.push('/create')
    }
    render(){
        let users = this.state.users;
        console.log(this.state)
        let lis = users.map(user=>{
            if(user.expanded){
                return <li><h4 onClick={e=>this.handleDExpansion(e)}>{user.full_name}</h4><Dashboard users={this.state.schedules.filter(schedule=>user.userid===schedule.userid)}></Dashboard></li>
            }
            return <li onClick={e=>this.handleExpansion(e)}><h4>{user.full_name}</h4></li>
        })
        return(
            <div className="ownerpage">
                <nav className="dashnav">
                    <NavLink to="/login" className="" onClick={this.logout}>logout</NavLink>
                </nav>
                <ul className="ulOwner">
                    {lis}
                </ul>
                <Link to="/create"><button className="createSchedules" >Create schedules</button></Link>
                {/* <div className="requestChanges">
                    <h2>Shift Changes Request</h2><hr></hr>
                    <div className="revision">
                        <span className="changee">Josh 6/11/2020 8:00am to 4:00pm</span> <span className="receiver">--> Hansel</span>
                        <div className="SCRButtons">
                        <button>Approve</button>
                        <button>Decline</button>
                        </div>
                    </div>
                    <div className="revision">
                        <span className="changee">Josh 6/11/2020 8:00am to 4:00pm</span> <span className="receiver">--> Hansel</span>
                        <div className="SCRButtons">
                        <button>Approve</button>
                        <button>Decline</button>
                        </div>
                    </div>
                    <div className="revision">
                        <span className="changee">Josh 6/11/2020 8:00am to 4:00pm</span> <span className="receiver">--> Hansel</span>
                        <div className="SCRButtons">
                        <button>Approve</button>
                        <button>Decline</button>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
import React from 'react';
import ScheduleApiService from './services/work_schedules-api';

export default class DashboardOwner extends React.Component{
    state={
        schedules:"",
        users:""
    }
    componentDidMount(){
        ScheduleApiService.getAllUsers()
            .then((res)=>this.setState({'users':res}))
        ScheduleApiService.getSchedules()
            .then((res)=>{
                this.setState({"schedules":res})
            })
    }
    render(){
        let users = this.state.users;
        console.log(users)
        let lis = users.map(user=><li>{user.full_name}</li>)
        return(
            <div className="ownerpage">
                <ul className="ulOwner">
                    {lis}
                </ul>
                <button className="createSchedules">Create schedules</button>
                <div className="requestChanges">
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
                </div>
            </div>
        )
    }
}
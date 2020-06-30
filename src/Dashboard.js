import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleApiService from './services/work_schedules-api';
import Table from './Table';


export default class Dashboard extends React.Component{
    state={
            "schedules":[]
    }
    componentDidMount(){
        ScheduleApiService.getSchedulesforUser()
            .then((res)=>{
                console.log(res)
                this.setState({"schedules":res})
            })
    }
    // for (const [key, value] of Object.entries(newSchedule)){
    //     if (value == ""){
    //       newSchedule[key] = null;
    //     }
    //   }
    render(){
        console.log(this.state)
        let tables = this.state.schedules.map((Schedule)=><Table schedule={Schedule}/>)
        return(
            <div className="dash">
                <nav className="dashnav">
                    <a href="/login">logout</a>
                    <div className="notifications">&#9993;</div>
                    <ul className="ulNotif">
                        <li>Kevin &#x21C4;</li>
                    </ul>
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
//npm install moment
// import moment from 'moment';
//let date = moment(new Date('2020-06-22T15:00:00.000Z')).format("LT")
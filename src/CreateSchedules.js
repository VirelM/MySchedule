import React from 'react';
// import ScheduleContext from './ScheduleContext'
import ScheduleApiService from './services/work_schedules-api'
import './App.css'

export default class Create extends React.Component{
    // static contextType = ScheduleContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { userid, 
            startMon, endMon, 
            startTues, endTues, 
            startWed, endWed, 
            startThurs, endThurs, 
            startFri, endFri, 
            startSat, endSat, 
            startSun, endSun
         } = ev.target;
        ScheduleApiService.postSchedule( userid.value, 
            startSun.value, endSun.value,
            startMon.value, endMon.value, 
            startTues.value, endTues.value, 
            startWed.value, endWed.value, 
            startThurs.value, endThurs.value, 
            startFri.value, endFri.value, 
            startSat.value, endSat.value
            )
          .then(()=>{
              this.props.history.push('/dashboardowner')
          })
        //   .catch(this.context.setError)
      }
    render(){
        return(
            <form className="createForm" onSubmit={this.handleSubmit}>
                <label htmlFor="userid">Employee</label>
                <input className="createInput" id="userid" name="userid"></input>
                <div className="createLabel">
                    <label htmlFor="startSun"><b>Sunday</b> </label><br></br>
                    <label htmlFor="startSun"> Start: </label>
                    <input className="createInput" placeholder="Ex. 2020-6-28 08:00 AM" id="startSun" name="startSun"></input>
                    <label htmlFor="endSun">End: </label>
                    <input className="createInput" placeholder="Ex. 2020-6-28 04:00 PM" id="endSun" name="endSun"></input>
                </div>
                <div className="createLabel">
                    <label htmlFor="startMon"><b>Monday</b> </label><br></br>
                    <label htmlFor="startMon">Start: </label>
                    <input className="createInput" id="startMon" name="startMon"></input>
                    <label htmlFor="endMon">End: </label>
                    <input className="createInput" id="endMon" name="endMon"></input>
                </div>
                <div className="createLabel">
                    <label htmlFor="startTues"><b>Tuesday</b> </label><br></br>
                    <label htmlFor="StartTues">Start: </label>
                    <input className="createInput" id="startTues" name="startTues"></input>
                    <label htmlFor="endTues">End: </label>
                    <input className="createInput" id="endTues" name="endTues"></input>
                </div>
                <div className="createLabel">
                    <label htmlFor="startWed"><b>Wednesday</b> </label><br></br>
                    <label htmlFor="startWed">Start: </label>
                    <input className="createInput" id="startWed" name="startWed"></input>
                    <label htmlFor="endWed">End: </label>
                    <input className="createInput" id="endWed" name="endWed"></input>
                </div>
                <div className="createLabel">
                    <label htmlFor="startThurs"><b>Thursday</b> </label><br></br>
                    <label htmlFor="startThurs">Start: </label>
                    <input className="createInput" id="startThurs" name="startThurs"></input>
                    <label htmlFor="endThurs">End: </label>
                    <input className="createInput" id="endThurs" name="endThurs"></input>
                </div>
                <div className="createLabel">
                    <label htmlFor="startFri"><b>Friday</b> </label><br></br>
                    <label htmlFor="startFri">Start: </label>
                    <input className="createInput" id="startFri" name="startFri"></input>
                    <label htmlFor="endFri">End: </label>
                    <input className="createInput" id="endFri" name="endFri"></input>
                </div>
                <div className="createLabel">
                    <label htmlFor="startSat"><b>Saturday</b> </label><br></br>
                    <label htmlFor="startSat">Start: </label>
                    <input className="createInput" id="startSat" name="startSat"></input>
                    <label htmlFor="endSat">End: </label>
                    <input className="createInput" id="endSat" name="endSat"></input>
                </div>
                <button className="createpage">Return</button>
                <button className="createpage" type="submit">Submit</button>
            </form>
        )
    }
}
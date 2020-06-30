import React from 'react';
// import ScheduleContext from './ScheduleContext'
import ScheduleApiService from './services/work_schedules-api'


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
        console.log(userid, 
            startMon, endMon, 
            startTues, endTues, 
            startWed, endWed, 
            startThurs, endThurs, 
            startFri, endFri, 
            startSat, endSat, 
            startSun, endSun);
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
                <input id="userid" name="userid"></input>
                <div>
                    <label htmlFor="startSun"><b>Sunday</b> </label>
                    <label htmlFor="startSun"> Start: </label>
                    <input id="startSun" name="startSun"></input>
                    <label htmlFor="endSun">End: </label>
                    <input id="endSun" name="endSun"></input>
                </div>
                <div>
                    <label htmlFor="startMon"><b>Monday</b> </label>
                    <label htmlFor="startMon">Start: </label>
                    <input id="startMon" name="startMon"></input>
                    <label htmlFor="endMon">End: </label>
                    <input id="endMon" name="endMon"></input>
                </div>
                <div>
                    <label htmlFor="startTues"><b>Tuesday</b> </label>
                    <label htmlFor="StartTues">Start: </label>
                    <input id="startTues" name="startTues"></input>
                    <label htmlFor="endTues">End: </label>
                    <input id="endTues" name="endTues"></input>
                </div>
                <div>
                    <label htmlFor="startWed"><b>Wednesday</b> </label>
                    <label htmlFor="startWed">Start: </label>
                    <input id="startWed" name="startWed"></input>
                    <label htmlFor="endWed">End: </label>
                    <input id="endWed" name="endWed"></input>
                </div>
                <div>
                    <label htmlFor="startThurs"><b>Thursday</b> </label>
                    <label htmlFor="startThurs">Start: </label>
                    <input id="startThurs" name="startThurs"></input>
                    <label htmlFor="endThurs">End: </label>
                    <input id="endThurs" name="endThurs"></input>
                </div>
                <div>
                    <label htmlFor="startFri"><b>Friday</b> </label>
                    <label htmlFor="startFri">Start: </label>
                    <input id="startFri" name="startFri"></input>
                    <label htmlFor="endFri">End: </label>
                    <input id="endFri" name="endFri"></input>
                </div>
                <div>
                    <label htmlFor="startSat"><b>Saturday</b> </label>
                    <label htmlFor="startSat">Start: </label>
                    <input id="startSat" name="startSat"></input>
                    <label htmlFor="endSat">End: </label>
                    <input id="endSat" name="endSat"></input>
                </div>
                <button>Return</button>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
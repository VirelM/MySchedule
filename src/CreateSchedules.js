import React from 'react';

// import ScheduleContext from './ScheduleContext'
import ScheduleApiService from './services/work_schedules-api'


export default class Create extends React.Component{
    handleSubmit = ev => {
        ev.preventDefault()
        const { thing } = this.context
        const { text, rating } = ev.target
    
        ScheduleApiService.postReview(thing.id, text.value, Number(rating.value))
          .then(this.context.addReview)
          .then(() => {
            text.value = ''
          })
          .catch(this.context.setError)
      }
    
    handleLoginSuccess = () => {
        const { location, history } = this.props
        console.log(location);
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }
    render(){
        return(
            <form className="createForm">
                <label>Employee</label>
                <input></input>
                <div>
                    <label><b>Sunday</b> </label>
                    <label> Start: </label>
                    <input></input>
                    <label>End: </label>
                    <input></input>
                </div>
                <div>
                    <label><b>Monday</b> </label>
                    <label>Start: </label>
                    <input></input>
                    <label>End: </label>
                    <input></input>
                </div>
                <div>
                    <label><b>Tuesday</b> </label>
                    <label>Start: </label>
                    <input></input>
                    <label>End: </label>
                    <input></input>
                </div>
                <div>
                    <label><b>Wednesday</b> </label>
                    <label>Start: </label>
                    <input></input>
                    <label>End: </label>
                    <input></input>
                </div>
                <div>
                    <label><b>Thursday</b> </label>
                    <label>Start: </label>
                    <input></input>
                    <label>End: </label>
                    <input></input>
                </div>
                <div>
                    <label><b>Friday</b> </label>
                    <label>Start: </label>
                    <input></input>
                    <label>End: </label>
                    <input></input>
                </div>
                <div>
                    <label><b>Saturday</b> </label>
                    <label>Start: </label>
                    <input></input>
                    <label>End: </label>
                    <input></input>
                </div>
                <button>Return</button>
                <button>Submit</button>
            </form>
        )
    }
}
import React from 'react';
import ScheduleApiService from './services/work_schedules-api';



export default class Signup extends React.Component{
    handleSubmit = ev => {
        ev.preventDefault();
        const { userid, password, full_name, store } = ev.target;
        console.log(userid, password);
        ScheduleApiService.postNewUser(
          userid.value,
          password.value,
          full_name.value,
          parseInt(store.value)
        )
        // .then(()=>{this.props.history.push('/login')})

        }
    render(){
        return(
            <form id="SignUp" onSubmit={this.handleSubmit}>
                <fieldset>
                    <label>location </label>
                    <select name="store">
                        <option value="1">Metro Reseda</option>
                        <option value="2">Metro Van Nuys</option>
                        <option value="3">Metro Glendale</option>
                    </select>
                    <legend>Sign Up Metro</legend>
                    <label htmlFor="full_name">Full Name</label>
                    <input name="full_name" id="full_name"></input><br></br>
                    <label htmlFor="userID_S">User ID</label>
                    <input name="userid" id="userID_S"></input><br></br>
                    <label htmlFor="password_S">Password</label>
                    <input name="password" id="password_S"></input><br></br>
                </fieldset>
                <button type="submit">Submit</button>
                <button type="button">Already have an account? Login</button>
            </form>
        )
    }
}
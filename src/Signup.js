import React from 'react';




export default class Signup extends React.Component{
    render(){
        return(
            <form id="SignUp">
                <fieldset>
                    <label>location </label>
                    <select>
                        <option value="Reseda">Metro Reseda</option>
                        <option value="VanNuys">Metro Van Nuys</option>
                        <option value="Glendale">Metro Glendale</option>
                    </select>
                    <legend>Sign Up Metro</legend>
                    <label htmlFor="userID_S">User ID</label>
                    <input id="userID_S"></input><br></br>
                    <label htmlFor="password_S">Password</label>
                    <input id="password_S"></input><br></br>
                </fieldset>
                <button type="submit">Submit</button>
                <button type="button">Already have an account? Login</button>
            </form>
        )
    }
}
import React from 'react';
import AuthApiService from './services/auth-api-service';
import TokenService from './services/token-service';
import { Link } from 'react-router-dom';



export default class Login extends React.Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }
    
    handleLoginSuccess = () => {
        const { location, history } = this.props
        console.log(location);
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    state = { error: null };

    handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({error:null});
    const { userid, password } = ev.target;
    console.log(userid, password);
    AuthApiService.postLogin({
      userid:userid.value,
      password:password.value
    })
      .then(res=>{
        userid.value=''
        password.value=''
        TokenService.saveAuthToken(res.authToken)
        this.onLoginSuccess()
      })
      .catch(res=>{
        this.setState({erroro:res.error})
      });
    }
    render(){
        return(
            <form id="Login" onSubmit={this.handleSubmitJwtAuth}>
                <fieldset>
                    <legend>Metro</legend>
                    <label htmlFor="userID_L">User ID</label>
                    <input required name='userid' id="userID_L"></input><br></br>
                    <label htmlFor="password_L">Password</label>
                    <input required name='password' id="password_L"></input>
                </fieldset>
                <button type="submit" >Login</button>
                <Link to="/"><button type="button">SignUp</button></Link>
            </form>
        )
    }
}
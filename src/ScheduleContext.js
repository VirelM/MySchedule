import React from 'react';

const ScheduleContext = React.createContext({
    error: null,
    setError: () => {},
    clearError: () => { },
})

export default ScheduleContext

export class ScheduleProvider extends React.Component {
    state = {
      error: null,
      user: null
    }
    setUser=(userObject)=>{
      this.setState({
        user:userObject
      })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    
    clearError = () => {
        this.setState({ error: null })
    }

    render(){
        const value ={
          user: this.state.user,
          error: this.state.error,
          setUser: this.setUser,
          setError: this.setError,
          clearError: this.clearError,
        }
        return (
            <ScheduleContext.Provider value={value}>
            {this.props.children}
          </ScheduleContext.Provider>
        )
    }
}


import React from 'react';
import Table from './Table';


export default class Dashboard extends React.Component{
    state={
            "schedules":[]
    }
    componentDidMount(){
        this.setState({"schedules":this.props.users})
    }

    render(){
        let tables = this.state.schedules.map((Schedule)=><Table schedule={Schedule}/>)
        return(
            <div className="dash">
                <div className="table_container">
                {tables}
                </div>
            </div>
        )
    }
}

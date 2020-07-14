import React from 'react';
import Table from './Table';
import moment from 'moment';

export default class Dashboard extends React.Component{
    state={
            "schedules":[]
    }
    componentDidMount(){
        this.setState({"schedules":this.props.users},() =>{
            this.mostRecentWeek()
        })
    }
    mostRecentWeek(){
        console.log("mostrecentweek running")
        let schedules = this.state.schedules;
        let todaysDate = moment( new Date() );
        let daysToSubstract = todaysDate.day();
        let pastSunday = todaysDate.subtract(daysToSubstract, "days")
        function daysBetween(first, second) {
            // Copy date parts of the timestamps, discarding the time parts.
            var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
            var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());
        
            // Do the math.
            var millisecondsPerDay = 1000 * 60 * 60 * 24;
            var millisBetween = two.getTime() - one.getTime();
            var days = millisBetween / millisecondsPerDay;
        
            // Round down.
            return Math.floor(days);
        }
        
        let listNumberScheduels= schedules.map(schedule=>{
            console.log(daysBetween(new Date(schedule.startSun),new Date(pastSunday)));
            console.log('testOutcome2Pre');
            if(daysBetween(new Date(schedule.startSun),new Date(pastSunday))===0){
                console.log('test')
                this.setState({
                    "active":schedule
                })
                return 0
            }else{
                console.log('testOutcome2');
                return daysBetween(new Date(schedule.startSun),new Date(pastSunday))
            }
            
        });
        console.log(listNumberScheduels)
        return listNumberScheduels
    }
    switchActiveScheduleNext = () =>{
        let index = this.state.schedules.findIndex(schedule=> schedule===this.state.active);
        index += 1;
        this.setState({
            "active":this.state.schedules[index]
        });

    }
    switchActiveSchedulePrevious = ()=>{
        let index = this.state.schedules.findIndex(schedule=> schedule===this.state.active);
        index -= 1;
        this.setState({
            "active":this.state.schedules[index]
        });
    }
    render(){
        let tables = this.state.schedules.map((Schedule)=>{
            if(Schedule===this.state.active){
                console.log('match')
                return <Table className="" schedule={Schedule}/>
            }
            
        })
        return(
            <div className="dash">
                <div className="table_container">
                <button onClick={this.switchActiveSchedulePrevious} className="prevTable">&lt;</button>
                {tables}
                <button onClick={this.switchActiveScheduleNext} className="nextTable">></button>
                </div>
            </div>
        )
    }
}

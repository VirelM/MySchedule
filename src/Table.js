import React from 'react';
import moment from 'moment';
import Cells from './Cells';


export default class Table extends React.Component{
    render(){
        let times = []
        for(let i=8;i<23;i++){
            let time = moment(new Date(`2020-06-22 0${i}:00`)).format("LT");
            times.push(time);
        }
        let newSchedule = {};
        console.log(newSchedule)
        for(let [key,value] of Object.entries(this.props.schedule)){
            if(key !=='id' && key !=='userid'){
                newSchedule[key] = value
            }
            
        }
        console.log(newSchedule)
        
        // let table = this.props.schedules.map(schedule=>{
        let tds = [];
        let newScheduleKeys = Object.keys(newSchedule);
        console.log(newScheduleKeys)
       
        var days =[];
            for(let x=0;x<14;x+=2){
                let newObject = {
                    start:newSchedule[newScheduleKeys[x]],
                    end:newSchedule[newScheduleKeys[x+1]]
                };
                console.log(newObject);
                console.log(newScheduleKeys[x],newScheduleKeys[x+1], x, x+1)
                days=[...days,newObject];
            }
        console.log(days);
        for(let i =0;i<7;i++){
            
            tds.push(<Cells day={days[i]}/>)
        }
        console.log(newSchedule[`startMon`])
        console.log(tds)
        return(<table className="userTable">
        <tbody>
            <tr>
                <th></th>
                <th>8:00am</th>
                <th>9:00am</th>
                <th>10:00am</th>
                <th>11:00am</th>
                <th>12:00pm</th>
                <th>1:00pm</th>
                <th>2:00pm</th>
                <th>3:00pm</th>
                <th>4:00pm</th>
                <th>5:00pm</th>
                <th>6:00pm</th>
                <th>7:00pm</th>
                <th>8:00pm</th>
                <th>9:00pm</th>
                <th>10:00pm</th>
            </tr>
            <tr><th>Sunday</th>{tds[6]}</tr>
            <tr><th>Monday</th>{tds[0]}</tr>
            <tr><th>Tuesday</th>{tds[1]}</tr>
            <tr><th>Wednesday</th>{tds[2]}</tr>
            <tr><th>Thursday</th>{tds[3]}</tr>
            <tr><th>Friday</th>{tds[4]}</tr>
            <tr><th>Saturday</th>{tds[5]}</tr>
        </tbody>
        </table>)
    }
}
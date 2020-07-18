import React from 'react';
import moment from 'moment';

export default class Cells extends React.Component{
    render(){
        let times = []
        for(let i=8;i<23;i++){
            let time = `${i}`;
            times.push(time);
        }
        // let tds = [];
        let order = [];
            for(let i=0;i<15;i++){ 
                if(parseInt(times[i]) >= parseInt(moment(this.props.day['start']).format("H")) + 7 && parseInt(times[i]) <= parseInt(moment(this.props.day['end']).format("H")) + 7){
                order.push(1)
                }else{
                    order.push(0)
                }
            }
        
        if(order ===[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]){
            return(
                <>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </>
            )
        }else{
            let tds= [];
            for(let z=0;z<order.length;z++){
                if(order[z]===1){
                    tds.push(<td className="working"></td>)
                }else{
                    tds.push(<td></td>)
                }
            }
            return(<>
                {tds}
                </>
            )
        }
        
    }
}
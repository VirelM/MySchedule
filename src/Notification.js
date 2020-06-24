import React from 'react';
import { Link } from 'react-router-dom';

export default class SwapShift extends React.Component{
    render(){
        return(
            <div className="swapContainer">
                <p>Kevin would like to swap shifts for Saturday:</p>
                <p>Drop 6/11/2020 8:00am to 3:00pm</p>
                <p>Swap for 8:00am to 4:00pm </p>
                <Link to="/dashboard"><button>Accept</button></Link>
                <Link to="/dashboard"><button>Decline</button></Link>
            </div>
        )
    }
}
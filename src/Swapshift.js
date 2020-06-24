import React from 'react';
import { Link } from 'react-router-dom';

export default class SwapShift extends React.Component{
    render(){
        return(
            <div className="swapContainer">
                <form id="swapSend">
                    <label>Swap with: </label>
                    <select>
                        <option>
                            Kevin
                        </option>
                        <option>
                            Josh
                        </option>
                        <option>
                            Anita
                        </option>
                        <option>
                            Richard
                        </option>
                        <option>
                            Berry
                        </option>
                        <option>
                            Hansel
                        </option>
                    </select>
                </form>
                <p>Drop 6/11/2020 8:00am to 4:00pm</p>
                <p>Swap for 8:00am to 3:00pm</p>
                <button form="swapSend">Confirm</button>
                <Link to="/dashboard"><button>Cancel</button></Link>
        </div>
        )
    }
}


import React from 'react';


export default class DashboardOwner extends React.Component{
    render(){
        return(
            <div className="ownerpage">
                <ul className="ulOwner">
                    <li><h4>Kevin</h4><table>
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
                    <tr><th>Sunday</th>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    </tr>
                    <tr><th>Monday</th>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    </tr>
                    <tr><th>Tuesday</th>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    </tr>
                    <tr><th>Wednesday</th>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    </tr>
                    <tr><th>Thursday</th>
                    <td className=""></td>
                    <td className=""></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    </tr>
                    <tr><th>Friday</th>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    </tr>
                    <tr><th>Saturday</th>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className=""></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    <td className="working"></td>
                    </tr>
                    </tbody>
                </table></li>
                    <li>Josh</li>
                    <li>Anita</li>
                    <li>Richard</li>
                    <li>Berry</li>
                    <li>Hansel</li>
                </ul>
                <button className="createSchedules">Create schedules</button>
                <div className="requestChanges">
                    <h2>Shift Changes Request</h2><hr></hr>
                    <div className="revision">
                        <span className="changee">Josh 6/11/2020 8:00am to 4:00pm</span> <span className="receiver">--> Hansel</span>
                        <div className="SCRButtons">
                        <button>Approve</button>
                        <button>Decline</button>
                        </div>
                    </div>
                    <div className="revision">
                        <span className="changee">Josh 6/11/2020 8:00am to 4:00pm</span> <span className="receiver">--> Hansel</span>
                        <div className="SCRButtons">
                        <button>Approve</button>
                        <button>Decline</button>
                        </div>
                    </div>
                    <div className="revision">
                        <span className="changee">Josh 6/11/2020 8:00am to 4:00pm</span> <span className="receiver">--> Hansel</span>
                        <div className="SCRButtons">
                        <button>Approve</button>
                        <button>Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
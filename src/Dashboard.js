import React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div className="dash">
                <nav className="dashnav">
                    <a href="/login">logout</a>
                    <div className="notifications">&#9993;</div>
                    <ul className="ulNotif">
                        <li>Kevin &#x21C4;</li>
                    </ul>
                </nav>
                <div className="table_container">
                <button className="prevTable">&lt;</button>
                
                <table className="userTable">
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
                    <td id="forty" className="working"></td>
                    <td id="forty" className="working"></td>
                    <td id="forty" className="working"></td>
                    <td id="forty" className="working"></td>
                    <td id="forty" className="working"></td>
                    </tr>
                    </tbody>
                </table>
                <button className="nextTable">></button>
                </div>
                
                <Link to="/swapshift"><button className="clear">Request shift change</button></Link>
                <button>Pick up shift</button>
                {/* <table>
                    <tbody>
                    <tr>
                    <th>Optional</th>
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
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
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
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
                    <td className="avaibleShift"></td>
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
                    <td className="SelectedShift"></td>
                    <td className="SelectedShift"></td>
                    <td className="SelectedShift"></td>
                    <td className="SelectedShift"></td>
                    <td className="SelectedShift"></td>
                    <td className="SelectedShift"></td>
                    <td className="SelectedShift"></td>
                    <td className="SelectedShift"></td>
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
                </table> */}
                <button>Confirm</button>
                <button>Cancel</button>
            </div>
        )
    }
}
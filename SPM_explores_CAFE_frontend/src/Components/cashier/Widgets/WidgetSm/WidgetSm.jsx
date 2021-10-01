import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import './WidgetSm.css';
import { Visibility } from '@material-ui/icons';
import {GlobalState} from '../../../../Globalstate'
function WidgetSm() {
    const [users, setUsers] = useState([]);
    


    useEffect(() => {
     

          axios.get("/csuser/getCustomers").then((res) => {
            console.log(res.data);
            setUsers(res.data);
          })
          .catch((err) => {
            alert(err.response.data.msg);
          });
      }, []);
    
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Top Customers</span>
            <ul className="widgetSmList">
                {
                    users.map(item=>(
                        <li className="widgetSmListItem">
                        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        alt="" className="widgetSmImg"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{item.name}</span>
                            <span className="widgetSmUserEmail">{item.email}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WidgetSm

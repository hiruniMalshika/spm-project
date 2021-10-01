import React, {useContext, useEffect, useState} from 'react'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
import { GlobalState } from '../../../Globalstate';
import axios from 'axios';
import './FeaturedInfo.css';
function FeaturedInfo() {
    const state = useContext(GlobalState)
    const [csorders] = state.csordersAPI.csorders

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
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Customers</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{users.length}</span>
                    <span className="featuredMoneyRate">
                        -10.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${ csorders.reduce(
    (sum, product) => sum + product.totalPrice,
    0
  )}</span>
                    <span className="featuredMoneyRate">
                        -9.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Orders</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{csorders.length}</span>
                    <span className="featuredMoneyRate">
                        +15<ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo

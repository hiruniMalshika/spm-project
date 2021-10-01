import React, { useContext, useState, useEffect }  from 'react'
import { GlobalState } from  '../GlobalStateKM'
import * as BsIcons from 'react-icons/bs'
import axios from 'axios';
import { Link } from 'react-router-dom'
import * as IoIcons5 from 'react-icons/io5'
import { IconName } from "react-icons/io";


function DashboardKM() {
    const state = useContext(GlobalState)
    const [customers] = state.kmcustomersAPI.customerList
    const [foodList] = state.foodsAPI.foods
    const [categoryList] = state.kmcategoriesAPI.categories
    

    return (
        <div>
            <div className="foodIcon">
                <div className="icon">
                    <IoIcons5.IoFastFood /> 
                    DASHBOARD
                    
                </div>  
                            
                {/* <h4>All Foods List</h4> */}
               
            </div>
            <hr />

            <div className="second-group1">

                <div className="second-group-first-box1">
                    <h4>Latest Orders</h4>
                    <h3>You have {customers.length} New Orders </h3>
                </div>

                <div className="second-group-second-box1">
                    <h4>Categories</h4> 
                    <h3>You have {categoryList.length} Categories </h3>

                </div>

                <div className="second-group-second-box1">
                    <h4>Foods</h4>
                    <h3>You have {foodList.length} Foods </h3>

                </div>

            </div>

            <div className="customer-table">
               
                <h3 style= {{fontSize: '45px', marginTop: "20px", marginLeft: "400px"}}>You have {customers.length} New Customers </h3>
                 
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Customer Name</th>  
                            <th>Order</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => (
                                <tr key={customer._id}>
                                    <td>{customer.name}</td> 
                                    <td> 
                                        <Link id= "btn_neworder" to={`/neworder/${customer._id}`} >View Order</Link>
                                    </td>
                                     
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
                

                
            </div>
             
        </div>
    )
}

export default DashboardKM
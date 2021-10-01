import React, { useContext, useState, useEffect }  from 'react'
import { GlobalState } from  '../GlobalStateKM'
import * as BsIcons from 'react-icons/bs'
import axios from 'axios';
import { Link } from 'react-router-dom'
import * as IoIcons5 from 'react-icons/io5'


function DashboardKM() {
    const state = useContext(GlobalState)
    const [customers] = state.kmcustomersAPI.customerList
    

    return (
        <div>
            <div className="foodIcon">
                <div className="icon">
                    <IoIcons5.IoFastFood />
                    All Foods List
                    
                </div>  
                            
                {/* <h4>All Foods List</h4> */}
               
            </div>
            <hr />

            <div className="customer-table">
                <h4 style={{fontSize: '45px', marginLeft: '300px'}}>You have {customers.length} New Orders </h4>
                 
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Customer Name</th> 
                            <th>Contact Number</th>
                            <th>Order</th>

                             
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => (
                                <tr key={customer._id}>
                                    <td>{customer.name}</td> 
                                    <td>{customer.mobile}</td>
                                    <td> 
                                        <Link id= "btn_delete" to={`/neworder/${customer._id}`} >Click</Link>
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
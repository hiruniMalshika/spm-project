import React, { useContext } from 'react'
import { GlobalState } from '../../../../Globalstate'
import * as BsIcons from 'react-icons/bs'  
import { Link } from 'react-router-dom'


function CustomerManagement() {
    const state = useContext(GlobalState)
    const [customers] = state.customerAPI_Manager.customerList

    return (
        <div>
            <div className="empIcon">
                <BsIcons.BsPeopleCircle />
                <h4>Customers</h4>
            </div>
            <hr />

            <div className="customer-table">
                <h4>We have {customers.length} Customers</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Contact Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => (
                                <tr key={customer._id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                    <td>
                                        <Link to={`order_details_customer/${customer._id}`}>Click</Link>
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

export default CustomerManagement

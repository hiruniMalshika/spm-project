import React, {useContext} from 'react'
import { GlobalState } from '../../../../../../Globalstate'
import axios from 'axios'
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom'

function EmployeePayments() {
    const state = useContext(GlobalState)
    const [paymentList] = state.employeeAPI.employeePaymentList

    return (
        <div>
            <div className="empIcon">
                <BsIcons.BsPeopleFill />
                <h4>Employee Payment List</h4>
            </div>
            <hr />

            <div className="paymentWindow">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Designation</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Emergency Phone</th>
                                <th>Duty Type</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentList.map(payment => (
                                    <tr key={payment._id}>
                                        <td>{payment.name}</td>
                                        <td>{payment.email}</td>
                                        <td>{payment.designation}</td>
                                        <td>{payment.phone}</td>
                                        <td>{payment.gender}</td>
                                        <td>{payment.emergencyPhone}</td>
                                        <td>{payment.dutyType}</td>
                                        <td>{payment.status}</td>
                                        <td>
                                            <Link to={`/payment_detail/${payment._id}`}>Add Payment ?</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default EmployeePayments

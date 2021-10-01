import React, { useContext } from 'react'
import * as BsIcons from 'react-icons/bs'
import { GlobalState } from '../../../../../Globalstate'
import SingleEmp from './SingleEmp'
import Filter from './Filter'

function EmployeeList() {
    const state = useContext(GlobalState)

    const [employees] = state.employeeAPI.employeeList

    return (
        <div>
            <div className="empIcon">
                <BsIcons.BsPeopleFill />
                <h4>Employee Management</h4>
            </div>
            <hr />

            <div className="emp-manage-page">
                <h4>There are {employees.length} Employees</h4>
                <Filter/> <br/>
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
                            employees.map(employee => {
                                /*<tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.emergencyPhone}</td>
                                    <td>{user.dutyType}</td>
                                    <td>{user.status}</td>
                                    <td></td>
                                </tr>*/
                                return <SingleEmp key={employee._id} employee={employee} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList

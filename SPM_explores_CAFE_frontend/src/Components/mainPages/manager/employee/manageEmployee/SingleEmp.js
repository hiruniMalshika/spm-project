import React from 'react'
import { Link } from 'react-router-dom'

function SingleEmp({employee}) {
    return (
        
            <tr>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.designation}</td>
                <td>{employee.phone}</td>
                <td>{employee.gender}</td>
                <td>{employee.emergencyPhone}</td>
                <td>{employee.dutyType}</td>
                <td>{employee.status}</td>
                <td>
                    <Link to={`/empEdit/${employee._id}`}>View</Link>
                </td>                
            </tr>
        
    )
}

export default SingleEmp
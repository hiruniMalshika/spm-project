import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {GlobalState} from '../../../../../Globalstate'

function CustomerOrdersList() {
    const param = useParams()
    const state = useContext(GlobalState)
    const [customerOrder] = state.customerAPI_Manager.customerList
    const [specificCustomer, setSpecificCustomer] = useState('')
    const arrayNullable = useState(false)

    useEffect(() => {
        if(param.id){
            customerOrder.forEach(singleCustomer => {
                if(singleCustomer._id === param.id){
                    setSpecificCustomer(singleCustomer)
                    console.log(singleCustomer)
                }
            })
        }
    }, [param.id, customerOrder])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Order Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>{specificCustomer.name}</tr>
                </tbody>
            </table>
        </div>
    )
}

export default CustomerOrdersList

/**{
                        specificCustomer.map(single => (
                            <tr key={single._id}>
                                <td>{single.name}</td>
                            </tr>
                        ))
                    } */
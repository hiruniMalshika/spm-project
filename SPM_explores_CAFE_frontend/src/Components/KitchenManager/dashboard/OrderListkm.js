import React,  { useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../GlobalStateKM'

function OrderListkm() {
    const param = useParams()
    const state = useContext(GlobalState)
    const [customerorder] = state.kmcustomersAPI.customerList
    const [onecustomer, setonecustomer] = useState('')
    const [newcustomer, setnewcustomer] = useState('')

    useEffect(() => {
        if(param.id) {
            customerorder.forEach(singleCustomer => {
                if(singleCustomer._id === param.id) {
                    setonecustomer(singleCustomer)
                    console.log(singleCustomer.cart)
                }
            })
        }   
    }, [param.id, customerorder] )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Order Details</th> 
                    </tr>
                </thead>
                <tbody>
                     {      
                        // tr>
                        //      <td>{onecustomer.name}</td>
                        //      <td>{onecustomer.email}</td>
                        //      <td>
                        //      onecustomer.map(())
                        //      </td>
                        //  </tr> <
                        // onecustomer.map(single => (
                        //      <tr key={single._id}>
                        //          <td>{single.name}</td>
                        //      </tr>
                        //  ))

                         
                     }
                </tbody>
            </table>
            
        </div>
    )
}

export default OrderListkm
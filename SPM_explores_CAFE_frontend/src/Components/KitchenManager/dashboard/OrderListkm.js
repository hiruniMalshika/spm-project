import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../GlobalStateKM'
import ('./orderList.css')

function OrderListkm() {
    const state = useContext(GlobalState)
    const [history] = state.kmcustomersAPI.customerList
    const [orderDetails, setOrderDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        if(params.id){
            history.forEach(item =>{
                if(item._id === params.id) setOrderDetails(item)
            })
        }
    },[params.id, history])

    
    if(orderDetails.length === 0) return null;

    console.log(orderDetails)

    return (
        <div className="history-page">
            <h2 style={{fontSize: "35px"}}>User Details of {orderDetails.name} </h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{color: "blue", fontSize: "25px"}}>{orderDetails.name}</td> 
                        <td style={{color: "black", fontSize: "25px"}}>{orderDetails.email}</td>
                         
                    </tr>
                </tbody>
            </table>

            <h2 style={{fontSize: "35px"}}>Order Details</h2>


            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.cart.map(item =>(
                        <tr key={item._id}>
                            <td><img src={item.images.url} alt="" /></td>
                            <td style={{color: "blue", fontSize: "25px"}}>{item.name}</td>
                            <td style={{color: "black", fontSize: "25px"}}>{item.quantity}</td>
                            <td style={{color: "red", fontSize: "25px"}}>$ {item.price * item.quantity}</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default OrderListkm

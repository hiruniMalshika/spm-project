import React, { useState, useEffect }from 'react'
import axios from 'axios'


function OrdersKMAPI() {
    const [orders, setFoodsOrders] = useState([])

    useEffect(() => {
        const getFoodsOrders = async () => {
            const res = await axios.get('http://localhost:5000/api/orders')
            // setFoods(res.data.foods)
            setFoodsOrders(res.data.foods)
            
        }
        getFoodsOrders()
    },[setFoodsOrders])


    return { 
         
            ordersList: [orders, setFoodsOrders]
        
    }
}

export default OrdersKMAPI

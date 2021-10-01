import React,  { useState, useEffect} from 'react'
import axios from 'axios'

function KMCustomersAPI() {
    const [customer, setcustomer] = useState([])
    const [callback, setCallback] = useState(false)

    const getCustomerList = async () => {
        const res = await axios.get('http://localhost:5000/api/order')
        setcustomer(res.data)
        //console.log(res.data)
    }

    useEffect(() => {
        getCustomerList()
    }, [])

    return {
        customerList: [customer, setcustomer],
        callback: [callback, setCallback]
    }
}

export default KMCustomersAPI

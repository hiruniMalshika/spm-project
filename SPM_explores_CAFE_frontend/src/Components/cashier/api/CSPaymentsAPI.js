import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
function CSPaymentsAPI() {
    const [cspayments, setCSPayments] = useState([])
    const [callback, setCallback] = useState(false)
   
    
    useEffect(()=>{
        const getSavedReports = async ()=>{
            const res = await axios.get('/api/cspayments')
            console.log(res.data.cspayments)
            setCSPayments(res.data.cspayments)
         
        }
     getSavedReports()
    }, [callback])
    return {
        cspayments: [cspayments, setCSPayments],
        callback: [callback, setCallback]
    }
}

export default CSPaymentsAPI

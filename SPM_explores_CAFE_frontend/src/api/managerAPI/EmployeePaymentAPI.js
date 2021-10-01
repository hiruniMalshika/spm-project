import  {useState, useEffect} from 'react'
import axios from 'axios'

function EmployeePaymentAPI() {
    const [payments, setPayments] = useState([])
    const [callback, setCallback] = useState(false)

    const getpaymentsList = async () => {
        const res = await axios.get('/empSal/empSal')
        //setPayments(res.data.foods)
        setPayments(res.data)
    }

    useEffect(() => {
        getpaymentsList()
    }, [])

    return {
        emp_payments_list: [payments, setPayments],
        callback: [callback, setCallback]
    }
}
 
export default EmployeePaymentAPI

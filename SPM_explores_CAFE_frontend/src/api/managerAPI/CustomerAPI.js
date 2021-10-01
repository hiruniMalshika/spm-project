import  {useState, useEffect} from 'react'
import axios from 'axios'

function CustomerAPI() {
    const [customer, setcustomer] = useState([])
    const [callback, setCallback] = useState(false)

    const getCustomerList = async () => {
        const res = await axios.get('/user/customerList')
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
 
export default CustomerAPI

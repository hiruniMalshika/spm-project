import {useState, useEffect} from 'react'
import axios from 'axios'

function EmployeeAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [employeeList, setEmployeeList] = useState([])
    const [allEmployees, setAllEmployees] = useState([])
    const [payment, setPayment] = useState([])
    //getEmployeesPaymentInformation
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')

    const getEmployeesInformations = async () => {
        const res = await axios.get(`/emp/getEmpList?limit=${sort}&name[regex]=${search}`)
        //setUsersList(res.data)
        setEmployeeList(res.data.emps) 
    }
    const getEmpList = async () => {
        const resEmp = await axios.get('/emp/getEmployee')
        //console.log(resEmp.data)
        setAllEmployees(resEmp.data)
    }

    const getEmpPaymentList = async () => {
        const resEmpPayment = await axios.get('/emp/getEmployeesPaymentInformation')
        //console.log(resEmpPayment.data)
        setPayment(resEmpPayment.data)
    }

    useEffect(() => {
        getEmployeesInformations()
        getEmpList()
        getEmpPaymentList()
    },  [callback, sort, search])

    useEffect(() => {
        if(token){
            const getEmployee = async () => {
                try {
                    const res = await axios.get('/emp/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                } catch (err) {
                    alert(err.responce)
                }
            }
            getEmployee()
        }
    }, [token])

    return {
        isLogged: [isLogged, setIsLogged],
        employeeList: [employeeList, setEmployeeList],
        allEmployees: [allEmployees, setAllEmployees],
        employeePaymentList: [payment, setPayment],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        search: [search, setSearch]
    }
}

export default EmployeeAPI

import React, {createContext, useState, useEffect} from 'react'
import CategoryAPI_Manager from './api/managerAPI/CategoryAPI'
import EmployeeAPI from './api/managerAPI/EmployeeAPI'
import FoodsAPI_Manager from './api/managerAPI/FoodsAPI'
import MessageAPI from './api/managerAPI/MessageAPI'
import CustomerAPI_Manager from './api/managerAPI/CustomerAPI'
import EmployeePaymentAPI from './api/managerAPI/EmployeePaymentAPI'
import axios from 'axios'
import CSUserAPI from "./Components/cashier/api/CSUserAPI";
import CSSubmitReportsAPI from "./Components/cashier/api/CSSubmitReportsAPI";
import CSOrdersAPI from "./Components/cashier/api/CSOrdersAPI";
import CSPaymentsAPI from "./Components/cashier/api/CSPaymentsAPI";
import ReportsAPI from "./Components/cashier/api/ReportsAPI";

import MenuAPI from './Components/mainPages/user/api/MenuAPI'
//import UserAPI from './Components/mainPages/user/api/UserAPI'
import UserAPI from './Components/mainPages/user/api/UserAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)
  

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/csuser/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(()=>{
                    refreshToken()
    
                }, 10 * 60 * 1000)
            }
        
            refreshToken()
        }
 
    }, [])


    const state = {
        token: [token, setToken],
        categoryAPI: CategoryAPI_Manager(),
        foodsAPI: FoodsAPI_Manager(),
        messageAPI: MessageAPI(),
        employeeAPI: EmployeeAPI(),
        customerAPI_Manager: CustomerAPI_Manager(),
        employeePayments: EmployeePaymentAPI(),
        reportsAPI: ReportsAPI(),
        csSubmitReportsAPI: CSSubmitReportsAPI(),
        csordersAPI: CSOrdersAPI(),
        menuAPI: MenuAPI(),
        userAPI: UserAPI(token) 
    }
    
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import CreateCategory from './mainPages/manager/category/createCategory/CreateCategory'
import Login from './login/LoginEmployee'
import EmployeeList from './mainPages/manager/employee/manageEmployee/EmployeeList'
import MessageList from './mainPages/manager/messages/MessageList'
//import Dashboard_manager from '../components/mainPages/manager/dashboard/DashBoard'
import Dashboard_manager from '../Components/mainPages/manager/dashboard/DashBoard'
//import AddNewEmployee_manager from '../components/mainPages/manager/employee/addNewEmployee/AddNewEmployee'
import AddNewEmployee_manager from '../Components/mainPages/manager/employee/addNewEmployee/AddNewEmployee'
import CategoryList from '../Components/mainPages/manager/category/categoryView/CategoryList'
import ReplyMessage from './mainPages/manager/messages/reply/ReplyMessage'
import CustomerManagement from './mainPages/manager/customers/CustomerManagement'
import ManageEmployeeLeave from './mainPages/manager/employee/manageEmployee/manageEmployeeLeave/ManageEmployeeLeave'
import EmployeePayments from './mainPages/manager/employee/manageEmployee/addPayments/EmployeePayments'
import AllMessagesSingleData from './mainPages/manager/messages/reply/AllMessagesSingleData'
import AddPaymentForm from './mainPages/manager/employee/manageEmployee/addPayments/AddPaymentForm'
import ViewPayments from './mainPages/manager/employee/manageEmployee/viewPayments/ViewPayments'
import CustomerOrdersList from './mainPages/manager/customers/customer_Orders/CustomerOrdersList'
import ViewDailyMenu from './mainPages/manager/category/foodMenu/ViewDailyMenu'
import './Pages/Pages.css'
import CSHome from './cashier/Dashboard/CSHome'
import CSLogin from "./cashier/Auth/CSLogin";
//import CSRegister from "../cashier/Auth/CSRegister";
//import NotFound from "./Utils/NotFound";
import NotFound from "./Pages/Utils/NotFound";
import CSSavedReportList from "./cashier/Reports/SavedReports/ReportList/CSSavedReportList";
//import cshome from "../cshome";
import cshome from "./cshome";
import CSCreateReport from "./cashier/Reports/SavedReports/CreateReport/CSCreateReport";
import CSSubmitReportList from "./cashier/Reports/SubmittedReports/CSSubmitReportList";
//import CSOrdersList from "../cashier/CSOrders/CSOrdersList";
import CSOrdersList from "./cashier/CSOrders/CSOrdersList";
//import CSViewOrder from "../cashier/CSOrders/ViewSingleOrder/CSViewOrder";
import CSViewOrder from "./cashier/CSOrders/ViewSingleOrder/CSViewOrder";
import CSPaymentsList from "./cashier/CSPayments/CSPaymentsList";
import CSCustomersList from "./cashier/Customers/CSCustomersList";
import CSViewReport from "./cashier/Reports/SubmittedReports/CSViewReport";

import Menu from './mainPages/user/menu/Menu'
import LoginU from './mainPages/user/auth/LoginU'
import RegisterU from './mainPages/user/auth/RegisterU'
import Cart from './mainPages/user/cart/Cart'
import DetailProduct from './mainPages/user/detailProduct/DetailProduct'
import UserMgt from './mainPages/user/userMgt/UserMgt'
import ViewHome from './mainPages/user/home/ViewHome'
import Staff from './mainPages/user/staff/Staff'
import { GlobalState } from '../Globalstate'
import '../Components/Pages/Pages.css'
import PagesX from './PagesX'
import Sidebar from './cashier/sidebar/Sidebar'

function Pages(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isCashier] = state.userAPI.isCashier
    const [isManager] = state.userAPI.isManager
    const [isKitchenManager]= state.userAPI.isKitchenManager
    return(
        <div>
        <Switch>
            <Route path="/" exact component={ ViewHome} />
            <Route path="/login" exact component={isLogged ? NotFound : LoginU}/>
            <Route path="/registerUser" exact component={isLogged ? NotFound : RegisterU}/>
            <div className="container">
            <Sidebar/>
            <PagesX/>
            </div>
        </Switch>
        </div>
    )
}
  

export default Pages 
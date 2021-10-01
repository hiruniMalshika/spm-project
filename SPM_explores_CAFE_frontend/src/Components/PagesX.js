import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import CreateCategory from './mainPages/manager/category/createCategory/CreateCategory'
import Login from './login/LoginEmployee'
import EmployeeList from './mainPages/manager/employee/manageEmployee/EmployeeList'
import MessageList from './mainPages/manager/messages/MessageList'

import Dashboard_manager from '../Components/mainPages/manager/dashboard/DashBoard'

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

import NotFound from "./Pages/Utils/NotFound";
import CSSavedReportList from "./cashier/Reports/SavedReports/ReportList/CSSavedReportList";

import cshome from "./cshome";
import CSCreateReport from "./cashier/Reports/SavedReports/CreateReport/CSCreateReport";
import CSSubmitReportList from "./cashier/Reports/SubmittedReports/CSSubmitReportList";

import CSOrdersList from "./cashier/CSOrders/CSOrdersList";

import CSViewOrder from "./cashier/CSOrders/ViewSingleOrder/CSViewOrder";
import CSPaymentsList from "./cashier/CSPayments/CSPaymentsList";
import CSCustomersList from "./cashier/Customers/CSCustomersList";
import CSViewReport from "./cashier/Reports/SubmittedReports/CSViewReport";

import Menu from './mainPages/user/menu/Menu'

import Cart from './mainPages/user/cart/Cart'
import DetailProduct from './mainPages/user/detailProduct/DetailProduct'
import UserMgt from './mainPages/user/userMgt/UserMgt'

import Staff from './mainPages/user/staff/Staff'
import { GlobalState } from '../Globalstate'
import '../Components/Pages/Pages.css'
import './Pages/Pages.css'
import Sidebar from './cashier/sidebar/Sidebar'
import CSCategorieslist from './cashier/CSCategories/CSCategorieslist'

import Dashboard from './KitchenManager/dashboard/DashboardKM'
import Foods from './KitchenManager/Menu/Foods'
//import DetailFood from './Details/DetailFood'
import DetailFood from './KitchenManager/Details/DetailFood'
//import DetailCategoryKM from './Details/DetailCategoryKM'
import DetailCategoryKM from './KitchenManager/Details/DetailCategoryKM'
//import AddFoods from './Menu/AddFoods'
import AddFoods from './KitchenManager/Menu/AddFoods'
//import AddMessageKM from './Meesages/AddMessageKM'
import AddMessageKM from './KitchenManager/Meesages/AddMessageKM'
//import CreateDailyMenu from './Daily_Menu/CreateDailyMenu'
import CreateDailyMenu from './KitchenManager/Daily_Menu/CreateDailyMenu'
// import MessagesKM from '../KitchenManager/MessagesKM'
//import KMListC from '../KitchenManager/category/view/KMListC'
import KMListC from './KitchenManager/category/view/KMListC'
//import KMViewDailyMenu from '../KitchenManager/Daily_Menu/KMViewDailyMenu'
import KMViewDailyMenu from './KitchenManager/Daily_Menu/KMViewDailyMenu'
//import OrderListkm from '../KitchenManager/dashboard/OrderListkm'
import OrderListkm from './KitchenManager/dashboard/OrderListkm'
import FoodsReportKM from './KitchenManager/Reports/FoodsReportKM'
import CategoryReport from './KitchenManager/Reports/CategoryReport'



function PagesX() {

    const state = useContext(GlobalState)
    
    const [isCashier] = state.userAPI.isCashier
    
    return (
        <div className="pages">
        <Switch>
            <Route path="/category/addNewCategory" exact component={CreateCategory}/>
            <Route path="/category/category_detail/:id" exact component={CreateCategory} />
            <Route path="/category/category_list" exact component={CategoryList} />
            <Route path='/dailyMenuView' exact component={ViewDailyMenu}/>

            <Route path="/messages_maanger" exact component={MessageList} />
            <Route path="/message_detail/:id" component={ReplyMessage} />
            <Route path="/full_message_detail/:id" component={AllMessagesSingleData} />

            <Route path="/dashboard_manager" exact component={Dashboard_manager} />

            {/*<Route path="/employee/add_employee" exact component={AddNewEmployee} />*/}
            <Route path="/add_employee_manager" exact component={AddNewEmployee_manager} />
            <Route path="/employee/manage_emp" exact component={EmployeeList} />
            <Route path="/empEdit/:id" component={ManageEmployeeLeave} />
            <Route path="/reports/addPayments" exact component={EmployeePayments} />
            <Route path="/payment_detail/:id" component={AddPaymentForm} />
            <Route path="/payment_view_list" component={ViewPayments} />

            <Route path="/customerManagement" exact component={CustomerManagement} /> {/**order_details_customer/ */}
            <Route path="/order_details_customer/:id" component={CustomerOrdersList} />

            <Route path='/login_employee' exact component={Login}/>

            <Route path="/cashier-dashboard" exact component={cshome}></Route>
            <Route path="/cslogin" exact component={CSLogin}></Route>
                
            <Route path="/cs-dashboard" exact component={ isCashier ? CSHome : NotFound
             }></Route>
            <Route path="/saved-reports" exact component={ CSSavedReportList}></Route>
            <Route path="/submitted-reports" exact component={CSSubmitReportList}></Route>
            <Route path="/create-report" exact component={ CSCreateReport}></Route>
            <Route path="/edit-report/:id" exact component={  CSCreateReport}></Route>
            <Route path="/view-report/:id" exact component={  CSViewReport}></Route>

            <Route path="/orders-list/" exact component={  CSOrdersList}></Route>
            <Route path="/view-order/:id" exact component={  CSViewOrder}></Route>
            <Route path="/payments-list" exact component={  CSPaymentsList}></Route>
            <Route path="/customers-list" exact component={  CSCustomersList}></Route>
            <Route path="/category-list" exact component={  CSCategorieslist}></Route>

            
            <Route path="/menu" exact component={Menu}/>
            <Route path="/detail/:id" exact component={DetailProduct}/>
            <Route path ="/side" exact component={Sidebar}/>
           
            <Route path="/cart" exact component={Cart}/>
            <Route path="/display" exact component={UserMgt} />
            <Route path="/staff" exact component={Staff} />

            <Route path="*" exact component={NotFound}></Route>


            <Route path="/kitchendashboard" exact component={Dashboard}/>
            <Route path="/menu/foods" exact component={Foods}/>

            <Route path="/detail/:id" exact component={DetailFood}/>
            <Route path="/detailc/:id" exact component={DetailCategoryKM}/>
            
            <Route path="/menu/addnewfood" exact component={AddFoods}/>
            <Route path="add/messages" exact component={AddMessageKM}/>


            <Route path="/edit/:id" exact component={AddFoods}/>
            <Route path="/neworder/:id" exact component={OrderListkm}/>

            {/* <Route path="/messages" exact component={MessagesKM}/> */}
            <Route path="/kmcategory" exact component={KMListC}/>

            <Route path="/daily" exact component={CreateDailyMenu}/>
            <Route path="/editdaily/:id" exact component={CreateDailyMenu}/>
            <Route path="/viewdailymenu" exact component={KMViewDailyMenu}/>


            <Route path="/reports/reports2" exact component={FoodsReportKM}/>

            <Route path="/reports/reports1" exact component={CategoryReport}/>
            </Switch>
        </div>
    )
}

export default PagesX

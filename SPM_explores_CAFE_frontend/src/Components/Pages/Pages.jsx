import { GlobalState } from "../../GlobalState";
import {Switch, Route} from 'react-router-dom'
import React, {useContext} from 'react'
import CSHome from "../cashier/Dashboard/CSHome";
import './Pages.css';
import CSLogin from "../cashier/Auth/CSLogin";
import CSRegister from "../cashier/Auth/CSRegister";
import NotFound from "./Utils/NotFound";
import CSSavedReportList from "../cashier/Reports/SavedReports/ReportList/CSSavedReportList";
import cshome from "../cshome";
import CSCreateReport from "../cashier/Reports/SavedReports/CreateReport/CSCreateReport";
import CSSubmitReportList from "../cashier/Reports/SubmittedReports/CSSubmitReportList";
import CSOrdersList from "../cashier/CSOrders/CSOrdersList";
import CSViewOrder from "../cashier/CSOrders/ViewSingleOrder/CSViewOrder";
import CSPaymentsList from "../cashier/CSPayments/CSPaymentsList";
import CSCustomersList from "../cashier/Customers/CSCustomersList";
import CSViewReport from "../cashier/Reports/SubmittedReports/CSViewReport";

function Pages() {
    
    
    return (
        <div className="pages">
            <Switch>
                
                
                <Route path="/" exact component={cshome}></Route>
                <Route path="/cslogin" exact component={CSLogin}></Route>
                <Route path="/csregister" exact component={CSRegister}></Route>

                <Route path="/cs-dashboard" exact component={  CSHome }></Route>
                <Route path="/saved-reports" exact component={ CSSavedReportList}></Route>
                <Route path="/submitted-reports" exact component={CSSubmitReportList}></Route>
                <Route path="/create-report" exact component={ CSCreateReport}></Route>
                <Route path="/edit-report/:id" exact component={  CSCreateReport}></Route>
                <Route path="/view-report/:id" exact component={  CSViewReport}></Route>

                <Route path="/orders-list/" exact component={  CSOrdersList}></Route>
                <Route path="/view-order/:id" exact component={  CSViewOrder}></Route>
                <Route path="/payments-list" exact component={  CSPaymentsList}></Route>
                <Route path="/customers-list" exact component={  CSCustomersList}></Route>



                <Route path="*" exact component={NotFound}></Route>
                
            </Switch>
        </div>
    )
}

export default Pages

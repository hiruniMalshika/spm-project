import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard/DashboardKM'
import Foods from './Menu/Foods'
import DetailFood from './Details/DetailFood'
import DetailCategoryKM from './Details/DetailCategoryKM'
import AddFoods from './Menu/AddFoods'
import AddMessageKM from './Meesages/AddMessageKM'
import CreateDailyMenu from './Daily_Menu/CreateDailyMenu'
// import MessagesKM from '../KitchenManager/MessagesKM'
import KMListC from '../KitchenManager/category/view/KMListC'
import KMViewDailyMenu from '../KitchenManager/Daily_Menu/KMViewDailyMenu'
import OrderListkm from '../KitchenManager/dashboard/OrderListkm'
import FoodsReportKM from '../KitchenManager/Reports/FoodsReportKM'
import CategoryReport from '../KitchenManager/Reports/CategoryReport'


 

function Pages(){
    return (
        <Switch>
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
    )
}
  

export default Pages 
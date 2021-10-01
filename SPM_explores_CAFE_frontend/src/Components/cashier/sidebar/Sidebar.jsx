import React, {useContext} from 'react'
import './Sidebar.css'
import {Home} from '@material-ui/icons';
import {CardTravelOutlined} from '@material-ui/icons';
import {ListAltOutlined, PeopleAltOutlined, NoteAddOutlined, DescriptionOutlined} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { GlobalState } from '../../../Globalstate';
import PagesX from '../../PagesX';
import '../../Pages/Pages.css'
function Sidebar() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isUser] = state.userAPI.isUser;
    const [isCashier] = state.userAPI.isCashier;
    const [isManager] = state.userAPI.isManager;
    const [isKitchenManager]= state.userAPI.isKitchenManager;
    const [token] = state.token;


    const managerRouter = () =>{
        return(
           
        
        <div className="sidebarWrappper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to ="/dashboard_manager" style={{textDecoration:"none", color:"white"}}>
                        <Home className="sidebarIcon"/>
                            Home
                        </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Employee</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/add_employee_manager" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Add Employee
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                    <Link to ="/employee/manage_emp" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Manage Employee
                 </Link>
                    </li>
                   
                </ul>
                <h3 className="sidebarTitle">Food Management</h3>
                    <ul className="sidebarList">
                            <li className="sidebarListItem">
                            <Link to ="/dailyMenuView" style={{textDecoration:"none", color:"white"}}>
                                <CardTravelOutlined className="sidebarIcon"/>
                                    Today Menu
                            </Link>
                            </li>
                            <li className="sidebarListItem">
                            <Link to ="/category/addNewCategory" style={{textDecoration:"none", color:"white"}}>
                                <CardTravelOutlined className="sidebarIcon"/>
                                    Add Category
                            </Link>
                            </li>
                            <li className="sidebarListItem">
                            <Link to ="/category/category_list" style={{textDecoration:"none", color:"white"}}>
                                <CardTravelOutlined className="sidebarIcon"/>
                                    Category List
                            </Link>
                            </li>
                    </ul>
                <h3 className="sidebarTitle">Messages</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/messages_maanger" style={{textDecoration:"none", color:"white"}}>
                        <PeopleAltOutlined className="sidebarIcon"/>
                            Messages
                    </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Reports</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/reports/addPayments" style={{textDecoration:"none", color:"white"}}>
                        <NoteAddOutlined className="sidebarIcon"/>
                            User Reports
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to ="/payment_detail/:id" style={{textDecoration:"none", color:"white"}}>
                            <DescriptionOutlined className="sidebarIcon"/>
                            Add Payments
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to ="/payment_view_list" style={{textDecoration:"none", color:"white"}}>
                        <DescriptionOutlined className="sidebarIcon"/>
                            Payment List
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        )
    }

    const kitchenManagerRouter = () =>{
        return(
           
      
        <div className="sidebarWrappper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to ="/kitchendashboard" style={{textDecoration:"none", color:"white"}}>
                        <Home className="sidebarIcon"/>
                            Home
                        </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/menu/foods" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Foods
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                    <Link to ="/menu/addnewfood" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Add Foods
                 </Link>
                    </li>
                   
                </ul>
                <h3 className="sidebarTitle">Reports</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/reports/reports2" style={{textDecoration:"none", color:"white"}}>
                        <ListAltOutlined className="sidebarIcon"/>
                             Foods Reports
                    </Link>
                    </li>
                    
                </ul>
                
                <h3 className="sidebarTitle">Daily Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/daily" style={{textDecoration:"none", color:"white"}}>
                        <NoteAddOutlined className="sidebarIcon"/>
                            Add Daily Menu
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to ="/viewdailymenu" style={{textDecoration:"none", color:"white"}}>
                            <DescriptionOutlined className="sidebarIcon"/>
                           View Daily Menu
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
   
        )
    }

    const cashierRouter = () =>{
        return(
            
            <div className="sidebarWrappper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to ="/cs-dashboard" style={{textDecoration:"none", color:"white"}}>
                            <Home className="sidebarIcon"/>
                                Home
                            </Link>
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Orders</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/orders-list" style={{textDecoration:"none", color:"white"}}>
                            <CardTravelOutlined className="sidebarIcon"/>
                                OrdersList
                        </Link>
                        </li>
                        <li className="sidebarListItem">
                        <Link to ="/payments-list" style={{textDecoration:"none", color:"white"}}>
                            <CardTravelOutlined className="sidebarIcon"/>
                                Payments
                     </Link>
                        </li>
                       
                    </ul>
                    <h3 className="sidebarTitle">Categories</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/category-list" style={{textDecoration:"none", color:"white"}}> 
                            <ListAltOutlined className="sidebarIcon"/>
                                 Category List
                         </Link>
                        </li>
                        
                    </ul>
                    <h3 className="sidebarTitle">Customers</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/customers-list" style={{textDecoration:"none", color:"white"}}>
                            <PeopleAltOutlined className="sidebarIcon"/>
                                Customers List
                        </Link>
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Reports</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Link to ="/create-report" style={{textDecoration:"none", color:"white"}}>
                            <NoteAddOutlined className="sidebarIcon"/>
                                New Report
                        </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to ="/saved-reports" style={{textDecoration:"none", color:"white"}}>
                                <DescriptionOutlined className="sidebarIcon"/>
                                    Saved Reports
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to ="/submitted-reports" style={{textDecoration:"none", color:"white"}}>
                            <DescriptionOutlined className="sidebarIcon"/>
                                Submitted Reports
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
     
        )
    }
    return (
       
        <div className="sidebar">
             {isManager && isLogged && managerRouter()}
             {isKitchenManager &&  isLogged && kitchenManagerRouter()}
             {isCashier && isLogged && cashierRouter()}
             {isUser && isLogged ?
        <div className="sidebarWrappper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to ="/viewHome" style={{textDecoration:"none", color:"white"}}>
                        <Home className="sidebarIcon"/>
                            Home
                        </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/menu" style={{textDecoration:"none", color:"white"}}>
                        <CardTravelOutlined className="sidebarIcon"/>
                            Menu
                    </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">Contact us</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/map" style={{textDecoration:"none", color:"white"}}>
                        <PeopleAltOutlined className="sidebarIcon"/>
                            Contact
                    </Link>
                    </li>
                </ul>
                <h3 className="sidebarTitle">About</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/messages" style={{textDecoration:"none", color:"white"}}>
                        <NoteAddOutlined className="sidebarIcon"/>
                            About Us
                    </Link>
                    </li>
                    
                </ul>
                <h3 className="sidebarTitle">Display User</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to ="/display" style={{textDecoration:"none", color:"white"}}>
                        <NoteAddOutlined className="sidebarIcon"/>
                            About Us
                    </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        : ''}
    </div>
   

     
    )
}

export default Sidebar

import React, {useContext} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
//import SideBar from './components/header/manager/SideBar';
import SideBar from './Components/header/manager/SideBar'
import Pages from './Components/Pages'
//import Pages from './Components/KitchenManager/Pages';
import { DataProvider } from './Globalstate'
//import {DataProvider} from './Components/KitchenManager/GlobalStateKM'
import Header from './Components/cashier/Headers/Header'
import Sidebar from './Components/cashier/sidebar/Sidebar';
import SideBarKM from './Components/header/KitchenManager/KMSidebar'

import UserSideBar from './Components/header/user/UserSideBar'

import './App.css'
import ViewHome from './Components/mainPages/user/home/ViewHome'

function App() {
 
 
  return (
    <DataProvider>
      <Router>
      <div className="App">
          <Header/>
          
              <Pages/>
            
        </div>
      </Router>
    </DataProvider>
  );
} 
       
export default App;


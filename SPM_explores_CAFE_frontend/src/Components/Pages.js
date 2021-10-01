import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'


import './Pages/Pages.css'

import NotFound from "./Pages/Utils/NotFound";


import LoginU from './mainPages/user/auth/LoginU'
import RegisterU from './mainPages/user/auth/RegisterU'

import ViewHome from './mainPages/user/home/ViewHome'

import { GlobalState } from '../Globalstate'
import '../Components/Pages/Pages.css'
import PagesX from './PagesX'
import Sidebar from './cashier/sidebar/Sidebar'

function Pages(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
   
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
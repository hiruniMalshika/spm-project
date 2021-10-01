import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {UserSideBarData} from './UserSideBarData'
import UserSubMenu from './UserSubMenu'
import { GlobalState } from '../../../Globalstate'
import axios from 'axios'

const Nav = styled.div`
    
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    margin-top: 30px;
`;

const NavIconC = styled(Link)`
    margin-left: 82rem;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    margin-top: -80px;
    top: 0;
    
`;


const SideBarNav = styled.nav`
   background-image: linear-gradient(#0f0c29, #302b63, #24243e);
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

function SideBar() {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    const state = useContext(GlobalState)
    console.log(state)

    const [isLogged] = state.userAPI.isLogged
    const [cart] = state.userAPI.cart


    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/login";
    }

    const loggedRouter = () =>{
        return(
            <>
             <NavIconC to="/login" onClick={logoutUser} style={{color: "black", textDecoration: "none",fontSize: "20px" }}>
                    LOGOUT
                    
                </NavIconC>
            </>
        )
    }

    return (
        <div>
        <Nav>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
        </Nav>

        <SideBarNav sidebar={sidebar} style={{fontSize: "20px"}}>
            <SidebarWrap>
                <NavIcon to="/home" style={{color: "white", textDecoration: "none" }}>
                    Explores Cafe ♨
                </NavIcon>
                {
                    isLogged ? loggedRouter() :  <NavIconC to="/login" onClick={logoutUser} style={{color: "black", textDecoration: "none",fontSize: "20px" }}>
                    LOGIN
                    
                </NavIconC>
                }
                {/* <NavIconC to="/login" style={{color: "white", textDecoration: "none",fontSize: "20px" }}>
                    LOGIN
                    
                </NavIconC> */}

                {/* <NavIconC to="/display" style={{color: "white", textDecoration: "none",fontSize: "20px" }}>
                    Display User
                    
                </NavIconC> */}

                <div style={{paddingTop: "20px"}}> 
                    {UserSideBarData.map((item, index) => {
                        return <UserSubMenu item={item} key={index} />;
                    })}
                </div>
            </SidebarWrap>
        </SideBarNav>
        </div>
    )
}

export default SideBar

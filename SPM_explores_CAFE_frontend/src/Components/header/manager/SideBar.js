import React, {useState, useContext} from 'react'
import styled from 'styled-components'
//import { GlobalState } from '../../../GlobalState'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu'
import axios from 'axios'
import { GlobalState } from '../../../Globalstate'
import * as BiIcons from 'react-icons/bi'


const Nav = styled.div`
    background: #15171c;
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

const SideBarNav = styled.nav`
    background: #15171c;
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

export default function SideBar() {
    const state = useContext(GlobalState)
    const [isLogged, setIsLogged] = state.employeeAPI.isLogged
    const [sidebar, setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)

    const logoutEmployee = async () => {
        await axios.get('/emp/logout')
        localStorage.removeItem('firstLogin')
        setIsLogged(false)
    }

    const loggedRouter = () => {
        return (
            <div>
                <div> 
                    {SidebarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                    })}
                    <BiIcons.BiLogOut style={{color:'red', marginLeft:'19px', marginTop:'10px'}} />
                    <Link to="/login_employee" style={{color:'white', marginLeft:'17px'}} onClick={logoutEmployee}>Logout</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
        <Nav>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
        </Nav>

        <SideBarNav sidebar={sidebar} style={{fontSize: "20px", color:'white'}}>
            <SidebarWrap>
                <NavIcon to="/" style={{color: "white", textDecoration: "none"}}>
                    Explores CAFE
                </NavIcon>
                {
                    isLogged ? loggedRouter() : <Link to="/login_employee" style={{
                        color:'white', 
                        marginLeft:'90px'
                    }}>Login</Link>
                }
            </SidebarWrap>
        </SideBarNav>
        </div>
    )
}



import { Grid } from '@material-ui/core'
import React, {useContext} from 'react'
import * as IoIcons5 from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../Globalstate'

function DashBoard() {

    const state = useContext(GlobalState)
    const [Categorys] = state.categoryAPI.categories
    const [employees] = state.employeeAPI.employeeList
    const [foodsList] = state.foodsAPI.foods_manager

    return (
        <div className="home">
            <div className="home_icon">
                <IoIcons5.IoHome />
                <h4>Dashboard</h4>                
            </div>
            <hr/> 

            <div style={{margin:'10px 10px 10px 10px' ,paddingTop:'30px', backgroundColor: '#e0e0e0', }}>
                <Grid container spacing={2}>
                    <Grid item container xs={12} style={{paddingBottom:'30px'}}>
                        <Grid item xs={2} style={{border:'2px solid rgb(105, 105, 105)', height: '60px',
                            marginLeft: '64px',
                            marginRight:'305px', 
                            boxShadow: '0 0 25px rgb(105, 105, 105)',
                            borderRadius: '6%',
                            textAlign:'center', 
                            paddingTop:'40px', 
                            backgroundColor: 'white' ,
                            color: 'black',
                            paddingBottom:'90px', fontSize:'23px'}}>
                                0 <br/>
                            Total Orders
                        </Grid>
                        <Grid item xs={2} style={{border:'2px solid rgb(105, 105, 105)', 
                            marginRight:'305px', paddingTop:'40px', 
                            paddingBottom:'90px', 
                            boxShadow: '0 0 25px rgb(105, 105, 105)',
                            borderRadius: '6%',
                            height:'60px', backgroundColor: 'white',
                            textAlign:'center', fontSize:'23px'}}>
                            {Categorys.length} <br/>
                            Total Categories
                        </Grid>
                        <Grid item xs={2} style={{border:'2px solid rgb(105, 105, 105)', height:'60px',
                            paddingTop:'40px', paddingBottom:'90px',
                            boxShadow: '0 0 25px rgb(105, 105, 105)',
                            borderRadius: '6%', backgroundColor: 'white',
                            textAlign:'center', fontSize:'23px'}}>
                            {employees.length} <br/>
                            Total Employees
                        </Grid>
                    </Grid>
                    
                </Grid>
                
            </div>
            
            <div className="second-group">
                <div className="second-group-first-box">
                    <h4>Latest Orders</h4>
                </div>
                <div className="second-group-second-box">
                    <h4>Sales</h4>
                </div>
            </div>

            <div className="third-group">
                <h2>Foods</h2>
                <div className="table-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Food name</th>
                            </tr>
                        </thead>
                        <tbody>
                            d
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashBoard

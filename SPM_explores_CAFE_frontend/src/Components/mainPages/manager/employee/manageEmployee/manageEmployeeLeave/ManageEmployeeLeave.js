import React, {useContext, useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {GlobalState} from '../../../../../../Globalstate' 
import axios from 'axios'
import * as BsIcons from 'react-icons/bs'
import { Grid } from '@material-ui/core'

const initialState = {
    name: '',
    email: '',
    designation: '',
    phone: '',
    gender: '',
    emergencyPhone: '',
    dutyType: '',
    userName: '',
    status: 'Select duty Status'
}
const styles = {
    outer: {
        borderRadius: 5,
        boxShadow: "0 10px 30px #BBB",
        padding: '40px 60px',
        width:'90%'
    },
};

function ManageEmployeeLeave() {
    const param = useParams()
    const state = useContext(GlobalState)
    const [employees] = state.employeeAPI.allEmployees
    const [singleEmp, setSingleEmp] = useState(initialState)
    const [callback, setCallback] = state.employeeAPI.callback
    const history = useHistory()

    useEffect(() => {
        employees.forEach(employee => {
            if(employee._id === param.id){
                setSingleEmp(employee)
            }
        })
    }, [param.id, employees])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setSingleEmp({...singleEmp, [name]:value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        //console.log(singleEmp)
        await axios.put(`/emp/updateEmpStatus/${singleEmp._id}`,{...singleEmp})
        setSingleEmp(initialState)
        alert('Change Employee duty status.')
        setCallback(!callback)
        history.push("/employee/manage_emp")
    }

    return (
        <div>
            <div className="empIcon">
                <BsIcons.BsPeopleFill />
                <h4>Manage status of the Work</h4>
            </div>
            <hr />

            <div>
                <div style={styles.outer} className="form_emp">
                <form onSubmit={handleSubmit}>
                    <h2 style={{fontSize:'30px', fontFamily:'Herculanum'}} >Form</h2><br/>
                        <Grid container spacing={2} direction="row" className="addEmpForm" style={{textAlign:'center', 
                            paddingTop: '20px'}}>
                            <Grid item sm={4} xs={12}>
                                <div>Full Name</div>
                                <input type="text" placeholder="Full Name" name="name" 
                                    value={singleEmp.name} onChange={handleChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Designation</div>
                                <input type="text" placeholder="Designation" name="Designation" 
                                    value={singleEmp.designation} onChange={handleChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Email Address</div>
                                <input type="email" placeholder="Email" name="email" 
                                    value={singleEmp.email} onChange={handleChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Phone</div>
                                <input type="number" placeholder="Phone" name="phone" 
                                    value={singleEmp.phone} onChange={handleChangeInput} />
                            </Grid>
                            
                            <Grid item sm={4} xs={12}>
                                <div>Gender</div>
                                <input type="text" placeholder="Gender" name="Gender" 
                                    value={singleEmp.gender} onChange={handleChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Emargency Phone</div>
                                <input type="number" name="emergencyPhone" placeholder="Emargency Phone"
                                    value={singleEmp.emergencyPhone} onChange={handleChangeInput} />
                            </Grid>
                            
                            <Grid item sm={4} xs={12}>
                                <div>Duty Type</div>
                                <input type="text" name="emergencyPhone" placeholder="Duty Type"
                                    value={singleEmp.dutyType} onChange={handleChangeInput} />
                            </Grid>
                            {/*<Grid item sm={4} xs={12}>
                                <div>Photograph</div>
                                <button className="photoButton">Chose file</button>
                                </Grid>*/}
                            <Grid item sm={4} xs={12}>
                                <div>User Name</div>
                                <input type="text" name="userName" placeholder="User Name"
                                    value={singleEmp.userName} onChange={handleChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Duty Status</div>
                                {/*<input type="text" name="status" onChange={handleChangeInput} value={singleEmp.status} />*/}
                                <select name="status" onChange={handleChangeInput}>
                                    <option>Duty Status</option>
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                    <option value="Leave">Leave</option>
                                </select>
                            </Grid>
                            <Grid item sm={4} xs={12} style={{marginRight:'50px'}}>
                                <button type="submit" className="addEmp">Change Duty</button>    
                            </Grid>
                            
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManageEmployeeLeave

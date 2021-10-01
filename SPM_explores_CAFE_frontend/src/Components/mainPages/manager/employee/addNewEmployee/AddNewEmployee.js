import { Grid } from '@material-ui/core'
import React, {useState} from 'react'
import * as BsIcons from 'react-icons/bs'
import './employee.css'
import axios from 'axios'

const styles = {
    outer: {
      borderRadius: 5,
      boxShadow: "0 10px 30px #BBB",
      padding: '40px 60px',
      width:'90%'
    },
  };
const initialState = {
    name: '', 
    designation: '', 
    email: '', 
    phone: '', 
    gender: '', 
    emergencyPhone: '', 
    dutyType: '', 
    userName: '', 
    password: ''
}

function AddNewEmployee() {
    const [employee, setEmployee] = useState({
        name: '', 
        designation: '', 
        email: '', 
        phone: '', 
        gender: '', 
        emergencyPhone: '', 
        dutyType: '', 
        userName: '', 
        password: ''
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setEmployee({...employee, [name]:value})
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/emp/register', {...employee})

            localStorage.setItem('firstLogin', true)

            alert("New Employee Added...")
            setEmployee(initialState)
            
            //window.location.href = "/category/category_list";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <div>
            <div className="empIcon">
                <BsIcons.BsPeopleFill />
                <h4>Add Employee</h4>
            </div>
            <hr />

            <div>
                <div style={styles.outer} className="form_emp">
                <form onSubmit={registerSubmit}>
                    <h2 style={{fontSize:'30px', fontFamily:'Herculanum'}} >Form</h2><br/>
                        <Grid container spacing={2} direction="row" className="addEmpForm" style={{textAlign:'center', 
                            paddingTop: '20px'}}>
                            <Grid item sm={4} xs={12}>
                                <div>Full Name</div>
                                <input type="text" placeholder="Full Name" name="name" 
                                    required value={employee.name} onChange={onChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Designation</div>
                                <select name="designation" onChange={onChangeInput}>
                                    <option value="">Select...</option>
                                    <option value="cashier">Cashier</option>
                                    <option value="kitchen manager">Kitchen Manager</option>
                                    <option value="supplier">Supplier</option>
                                </select>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Email Address</div>
                                <input type="email" placeholder="Email" name="email" 
                                    required value={employee.email} onChange={onChangeInput}/>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Phone</div>
                                <input type="number" placeholder="Phone" name="phone" 
                                    required value={employee.phone} onChange={onChangeInput}/>
                            </Grid>
                            
                            <Grid item sm={4} xs={12}>
                                <div>Gender</div>
                                <select name="gender" onChange={onChangeInput}>
                                    <option value="">Select Gender...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Emargency Phone</div>
                                <input type="number" name="emergencyPhone" 
                                    required value={employee.emergencyPhone} onChange={onChangeInput} />
                            </Grid>
                            
                            <Grid item sm={4} xs={12}>
                                <div>Duty Type</div>
                                <select name="dutyType" onChange={onChangeInput}>
                                    <option value="">Select...</option>
                                    <option value="fullTime">Full Time</option>
                                    <option value="partTime">Part Time</option>
                                </select>
                            </Grid>
                            {/*<Grid item sm={4} xs={12}>
                                <div>Photograph</div>
                                <button className="photoButton">Chose file</button>
                                </Grid>*/}
                            <Grid item sm={4} xs={12}>
                                <div>User Name</div>
                                <input type="text" name="userName" placeholder="User Name"
                                    required value={employee.userName} onChange={onChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <div>Password</div>
                                <input type="password" placeholder="password" name="password" 
                                    required value={employee.password} onChange={onChangeInput} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <button className="addEmp">Add Employee</button>    
                            </Grid>
                            
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewEmployee

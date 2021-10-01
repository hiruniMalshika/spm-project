import React, {useState, useEffect, useContext} from 'react'
import * as GiIcons from 'react-icons/gi'
import axios from 'axios'
import {GlobalState} from '../../../../../../Globalstate'
import { useParams } from 'react-router-dom'

const initialState = {
    empName:'', 
    basicSal: '', 
    workingHoursPerDay: '', 
    salary: ''
}

function AddPaymentForm() {
    const param = useParams()
    const state = useContext(GlobalState)
    const [employees] = state.employeeAPI.employeePaymentList
    const [payment, setPayment] = useState('')
    const [paymentForm, setPaymentForm] = useState(initialState)

    useEffect(() => {
        if(param.id){
            employees.forEach(payment => {
                if(payment._id === param.id){
                    setPayment(payment)
                }
            })
        }
    }, [param.id, employees])

    const handleChangeInput = e => { 
        const {name, value} = e.target
        setPaymentForm({...paymentForm, [name]:value})
    }

    const submitSalary = async e => {
        e.preventDefault()
        try {
            await axios.post('/empSal/empSal', {...paymentForm})
            alert("Payment Added.!")
            setPaymentForm(initialState)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    const generateRepo = () => {
        try {
            axios.get('/generatePDF/generatePDF')
            alert("Report Added.!")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleExport = (event) => {
        console.log("Clicked.........")
    }

    return (
        <div>
            <div className="empIcon">
                <GiIcons.GiTakeMyMoney />
                <h4>Monthly Payment</h4>
                
            </div>
            <hr />

            <div className="main-form-add-payment">
                <div className="add-payment-form">
                    <h4 style={{fontSize: '35px'}}>Name : {payment.name}</h4><br/>
                    <form onSubmit={submitSalary}>
                        <div>
                            <input type="text" required name="empName" value={paymentForm.empName} 
                                onChange={handleChangeInput} placeholder="Employee Name" />
                        </div>
                        <div>
                            <input type="text" required name="basicSal" value={paymentForm.basicSal} 
                                onChange={handleChangeInput} placeholder="Employee Basic Salary" />
                        </div>
                        <div>
                            <input type="text" required name="workingHoursPerDay" value={paymentForm.workingHoursPerDay} 
                                onChange={handleChangeInput} placeholder="Working Hours Per Day" />
                        </div>
                        <div>
                            <input type="text" required name="salary" value={paymentForm.salary} 
                                onChange={handleChangeInput} placeholder="Salary" />
                        </div>

                        <button className="addEmp">Add Payment</button>    
                    </form>
                    <button className="addEmp" onClick={handleExport}>Add Payment</button>    
                </div>
            </div>

        </div>
    )
    //generatePDF
}

export default AddPaymentForm

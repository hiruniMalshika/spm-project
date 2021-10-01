import React, { useContext, useState , useEffect} from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import '../SavedReports/CreateReport/CSCreateReport.css'
import { Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {GlobalState} from '../../../../Globalstate'
import {useHistory, useParams} from 'react-router'

const styles ={
  outer: {
    borderRadius: "2.5%",
    boxShadow: "0 10px 30px #BBB",
    padding: "40px 60px",
    width: "95%",
    marginLeft: "2%"
  }
};
const initialState= {
    date:new Date(),
    start_time:new Date(),
    end_time: new Date(),
    orders_count: 0,
    complete_orders_count:0,
    canceled_orders_count:0,
    revenue:0,
    other_payments:0,
    total_suppliers_charges:0
  }

function CSViewReport() {

  const state = useContext(GlobalState)
  const [SubmitReport, setSubmitReports] = useState(initialState)
  const [csorders] = state.csordersAPI.csorders

 

  const [reports] = state.csSubmitReportsAPI.sreports
  const [onEdit, setOnEdit] = useState(false)
  const [callback, setCallback] = state.reportsAPI.callback
  const [scallback, setsCallback] = state.csSubmitReportsAPI.callback;

  const params = useParams()

  useEffect(()=>{
    if(params.id){
        reports.forEach(item =>{
            if(item._id === params.id) setSubmitReports(item)
            
        })
        
    }
   
    
}, [params.id, csorders])

    return (
        <div className="createReport">
        <div style={styles.outer} >
         
          <form >
          <button style={{width: '35px', backgroundColor: 'rgb(168, 168, 168)'}}><Link to ="/submitted-reports"><ArrowBackIosIcon style={{color: 'white'}}></ArrowBackIosIcon></Link></button>
          <h1>View Entry</h1>
              <div className="inputFields">
                
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justifyContent="space-around">
                              <label style={{"fontSize": "20px", paddingTop: '21px'}}>Date</label>
                              <KeyboardDatePicker
                              disableToolbar
                              variant="inline"
                              format="MM/dd/yyyy"
                              margin="normal"
                              id="date-picker-inline"
                              label=""
                              name="date"
                              value= {SubmitReport.date}
                             
                              
                              KeyboardButtonProps={{
                                  'aria-label': 'change date',
                              }}
                             
                              />
                              <label style={{"fontSize": "20px", paddingTop: '21px'}}>Start Time</label>
                              <KeyboardTimePicker
                              margin="normal"
                              id="time-picker"
                              label=""
                              name="start_time"
                              value={SubmitReport.start_time}
                             
                              KeyboardButtonProps={{
                                  'aria-label': 'change time',
                              }}
                              
                              /> 
                              <label style={{"fontSize": "20px", paddingTop: '21px'}}>End Time</label> 
                              <KeyboardTimePicker
                              margin="normal"
                              id="time-picker"
                              label=""
                              name="end_time"
                              value={SubmitReport.end_time}
                              
                              KeyboardButtonProps={{
                                  'aria-label': 'change time',
                              }}
                              
                              />  
                       </Grid>
                  </MuiPickersUtilsProvider>
                  <div class="grid-container">
                      <div class="grid-item">
                          <label>Total Orders Per day</label>
                          <input type="Number" placeholder="Total Orders" className= "form-control"
                          value={SubmitReport.orders_count}  
                          name="orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Completed Orders</label>
                          <input type="Number" placeholder="Completed Orders" className= "form-control" defaultValue={csorders.length}
                          value={SubmitReport.complete_orders_count}  
                          name="complete_orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Canceled Orders</label>
                          <input type="Number" placeholder="Canceled Orders" className= "form-control"
                          value={SubmitReport.canceled_orders_count}  
                          name="canceled_orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Revenue      </label><br></br>
                          <input type="Number" placeholder="Revenue" className= "form-control"
                          value={SubmitReport.revenue}  
                          name="revenue"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Other Payments</label>
                          <input type="Number" placeholder="Other Payments" className= "form-control"
                          value={SubmitReport.other_payments}  
                          name="other_payments"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Total Suppliers Charges</label>
                          <input type="Number" placeholder="Total Suppliers Charges" className= "form-control"
                          value={SubmitReport.total_suppliers_charges}  
                          name="total_suppliers_charges"
                          />
                      </div>
                  
                      
                  </div>         
              </div>
          </form>
        </div>
        
      </div>
    )
}

export default CSViewReport

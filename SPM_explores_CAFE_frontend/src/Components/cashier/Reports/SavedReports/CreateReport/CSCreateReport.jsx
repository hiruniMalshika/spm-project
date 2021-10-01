import React, { useContext, useState , useEffect} from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './CSCreateReport.css';
import { Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {GlobalState} from '../../../../../Globalstate'
import {useHistory, useParams} from 'react-router'
import { width } from "@mui/system";

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
    orders_count: '',
    complete_orders_count:'',
    canceled_orders_count:'',
    revenue:'',
    other_payments:'',
    total_suppliers_charges:''
  }

function CSCreateReport() {

  const state = useContext(GlobalState)
  const [savedreport, setSavedReport] = useState(initialState)
  const [csorders] = state.csordersAPI.csorders

  
  const history = useHistory()
  const param = useParams()

  const [reports] = state.reportsAPI.reports
  const [onEdit, setOnEdit] = useState(false)
  const [callback, setCallback] = state.reportsAPI.callback
  const [scallback, setsCallback] = state.csSubmitReportsAPI.callback;

  const [date, setDate] = useState(new Date());
  const [start_time, setstart_time] = useState(new Date());
  const [end_time, setend_time] = useState(new Date());
  




  useEffect(() =>{
    if(param.id){
        setOnEdit(true)
        reports.forEach(report =>{
            if(report._id === param.id){
                setSavedReport(report)
            } 
        })
    }else{
        setOnEdit(false)
        setSavedReport(initialState)
    }
}, [param.id, reports])

   const handleChangeInput = (e) =>{

    const {name, value} = e.target
    setSavedReport({...savedreport, [name]: value})

  }
 
  function clearAllFields() {
    this.setReports(initialState)
  }

  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleStarttime = (start_time)=>{
    setstart_time(start_time);
  }
  const handleEndtime = (end_time)=>{
    setend_time(end_time);
  }
  const handleSubmit = async e =>{
        e.preventDefault()
        try{
        
            if(onEdit){
                await axios.put(`/api/savedreport/${savedreport._id}`, {...savedreport, date , start_time, end_time});
                 alert("Report updated successfully")
                
            }else{
                await axios.post('/api/savedreport', {...savedreport, date, start_time, end_time});
               alert("Report added successfully")
            }
            setCallback(!callback);
            
            history.push('/saved-reports')
            

        }catch(err){
            alert(err.response.data.msg) 
        }  
    }
    const submitReport = async e=>{
        e.preventDefault()
        try{
            await axios.post(`/api/submitreport`, {...savedreport, date , start_time, end_time})
        }catch(err){
            alert(err.response.data.msg) 
        }
        setsCallback(!scallback)
        history.push('/submitted-reports')
    }

    
    return (
        <div className="createReport" style={{width: '1200px' }}>
        <div  >
         
          <form onSubmit={handleSubmit} style={{width: '1100px', boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
        WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
        MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}}>
          <button style={{width: '35px', backgroundColor: 'rgb(168, 168, 168)'}}><Link to ="/saved-reports"><ArrowBackIosIcon style={{color: 'white'}}/></Link></button>
          <h1>Add New Entry</h1>
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
                              value= {savedreport.date}
                              minDate={new Date()} 
                              onChange={handleDateChange} 
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
                              value={savedreport.start_time}
                              onChange={handleStarttime}
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
                              value={savedreport.end_time}
                              onChange={handleEndtime}
                              KeyboardButtonProps={{
                                  'aria-label': 'change time',
                              }}
                              
                              />  
                       </Grid>
                  </MuiPickersUtilsProvider>
                  <div class="grid-container">
                      <div class="grid-item">
                          <label>Total Orders Per day</label>
                          <input type="Number"  placeholder="Total Orders" className= "form-control" required
                          value={savedreport.orders_count}  onChange={handleChangeInput}
                          name="orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Completed Orders</label>
                          <input type="Number"  placeholder="Completed Orders" className= "form-control" required
                          value={savedreport.complete_orders_count}  onChange={handleChangeInput} 
                          name="complete_orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Canceled Orders</label>
                          <input type="Number" placeholder="Canceled Orders" className= "form-control" required
                          value={savedreport.canceled_orders_count}  onChange={handleChangeInput}
                          name="canceled_orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Revenue      </label><br></br>
                          <input type="Number" placeholder="Revenue" className= "form-control" required
                          value={savedreport.revenue}  onChange={handleChangeInput}
                          name="revenue"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Other Payments</label>
                          <input type="Number" placeholder="Other Payments" className= "form-control"
                          value={savedreport.other_payments}  onChange={handleChangeInput}
                          name="other_payments"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Total Suppliers Charges</label>
                          <input type="Number" placeholder="Total Suppliers Charges" className= "form-control"
                          value={savedreport.total_suppliers_charges}  onChange={handleChangeInput}
                          name="total_suppliers_charges"
                          />
                      </div>
                  
                      <div class="grid-item">
                              <button onClick={clearAllFields} >Clear</button>
                      </div>
                      <div class="grid-item">
                            <button type="submit">{onEdit? "Update" : "Create"}</button>
                      </div>
                     <div class="grid-item">
                              <button onClick={submitReport} >Submit</button>
                      </div>
                      
                  </div>         
              </div>
          </form>
        </div>
        
      </div>
    )
}

export default CSCreateReport

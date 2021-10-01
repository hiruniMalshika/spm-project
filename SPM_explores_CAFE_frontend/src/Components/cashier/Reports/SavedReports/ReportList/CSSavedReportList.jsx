import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../../../Globalstate'
import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, 
  Paper,
  makeStyles
  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Loading from '../../../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ReportFilters from './ReportFilters';
import Button from 'react-bootstrap/Button';
import './CSSavedReportList.css'

const useStyles = makeStyles((theme)=>({
  table:{
      minWidth: 850
  },
  tableContainer: {
      marginTop: 30,
      borderRadius: 15,
      margin: '10px 10px',
      maxWidth: 1050,
      marginLeft:50
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar:{
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
      fontWeight: 'bold',
      color: theme.palette.primary.dark
  },
  status: {
      fontweight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  }
}))


function CSSavedReportList() {
    const state = useContext(GlobalState)
    const [reports] = state.reportsAPI.reports
    const [ setLoading] = useState(false)
    const [callback, setCallback] = state.reportsAPI.callback
    const [token] = state.token
    const classes = useStyles();
    console.log(state)

    const deletereport = async(id) =>{
      console.log({id})
      
      try{
          
          const deleteReport = axios.delete(`/api/savedreport/${id}`, {
              headers: {Authorization: token}
          })

          alert("Report deleted successfully")
          await deleteReport
          setCallback(!callback)
          
      }catch(err){
          alert(err)
      }
     }


    return (
      <div className="reportlist">
        <h1 className="saved-reports-title">Saved Reports</h1>
        <hr/>
        <div className="reporttopheader"  style={{marginTop: '55px'}}>
         
           <button className="btnnewReport" style={{width: '300px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '38px', fontSize: '15px', marginLeft: '55px'}}><Link to = "/create-report" className="btnnewReportlink">New Entry</Link></button>
            <ReportFilters/>
           
        </div>
      {        
                <TableContainer component={Paper} className={classes.tableContainer} style={{boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}}>
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell  className={classes.tableHeaderCell}>Date</TableCell>
                      <TableCell  className={classes.tableHeaderCell}>Start Time</TableCell>
                      <TableCell  className={classes.tableHeaderCell}>End Time</TableCell>
                      <TableCell  className={classes.tableHeaderCell}>Actions</TableCell>
                      <TableCell className={classes.tableHeaderCell}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report._id}>
                        <TableCell  >{new Date(report.date).toLocaleDateString()}</TableCell>
                        <TableCell >{new Date(report.start_time).toLocaleTimeString()}</TableCell>
                        <TableCell  >{new Date(report.end_time).toLocaleTimeString()}</TableCell>
                        <TableCell  >{
                            <Button onClick={()=> deletereport(report._id)} style={{width: '100px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '35px', fontSize: '15px'}}>
                            Delete<DeleteIcon/></Button>
                            
                        }</TableCell>
                        <TableCell><Link to={`/edit-report/${report._id}`} >{<Button style={{width: '100px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '35px', fontSize: '15px'}} startIcon={<EditIcon />}>
                            Edit<EditIcon /></Button>}</Link></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      {reports.length === 0 && <Loading/>}
    </div>
    )
}

export default CSSavedReportList

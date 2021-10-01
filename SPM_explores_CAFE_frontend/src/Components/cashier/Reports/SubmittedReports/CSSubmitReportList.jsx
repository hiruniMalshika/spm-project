import {GlobalState} from '../../../../Globalstate'
import React, {useContext, useState} from 'react'
import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Avatar,
  Grid,
  Typography
  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Loading from '../../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import '../SavedReports/ReportList/CSSavedReportList.css'
import ReportFilters from '../SavedReports/ReportList/ReportFilters';


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


function CSSubmitReportList() {
    const state = useContext(GlobalState)
    const [reports] = state.csSubmitReportsAPI.sreports
    const classes = useStyles();
    
    console.log(state)

    return (
      <div className="reportlist">
      <h1 className="saved-reports-title" >Submitted Reports</h1>
      <hr/>
        <div className="reporttopheader" style={{marginTop: '55px'}}>
         
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
                      <TableCell className={classes.tableHeaderCell}>Date</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Start Time</TableCell>
                      <TableCell className={classes.tableHeaderCell}>End Time</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report._id}>
                        <TableCell >{new Date(report.date).toLocaleDateString()}</TableCell>
                        <TableCell >{new Date(report.start_time).toLocaleTimeString()}</TableCell>
                        <TableCell >{new Date(report.end_time).toLocaleTimeString()}</TableCell>
                        <TableCell style={{float: 'center'}}><Link to={`/view-report/${report._id}`} >{<Button style={{width: '100px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '35px', fontSize: '15px', }} className="viewbtn">
                            View</Button>}</Link></TableCell>
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

export default CSSubmitReportList

import React, {useContext, useState, useEffect} from 'react'
import { GlobalState } from '../../../Globalstate';
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
import ShopIcon from '@mui/icons-material/Shop';
import EditIcon from '@material-ui/icons/Edit';
import Loading from '../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios';




import CSLoadMore from '../CSOrders/CSLoadMore';

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

function CSPaymentsList() {
    const state = useContext(GlobalState)
    const [cspayments, setPayments] = useState([])
    const [setLoading] = useState(false)
    
    const classes = useStyles();
  
    console.log(state)

    useEffect(() => {
     

        axios.get("http://localhost:5000/api/cspayments").then((res) => {
          console.log(res.data);
          setPayments(res.data);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    }, []);
   
  
    return (
    
        <div className="orders-list-cs">
     <h1 className="titleOrders" style={{marginLeft: '45px'}}>Payments     <ShopIcon /></h1>
     <hr/>
      {
                <TableContainer component={Paper} className={classes.tableContainer} style={{boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}} >
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell} >Payment ID</TableCell>
                      <TableCell className={classes.tableHeaderCell}>OrderId</TableCell>
                      <TableCell className={classes.tableHeaderCell}>UserID</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Payment Date and Time</TableCell>
                    
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cspayments.map((payment) => (
                      <TableRow key={payment._id}>
                        <TableCell >{(payment.paymentID)}</TableCell>
                        <TableCell >{(payment.orderid)}</TableCell>
                        <TableCell >{(payment.user_id)}</TableCell>
                        <TableCell >{new Date(payment.createdAt).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      <CSLoadMore/>
      {cspayments.length === 0 && <Loading/>}
    </div>
    )
}

export default CSPaymentsList

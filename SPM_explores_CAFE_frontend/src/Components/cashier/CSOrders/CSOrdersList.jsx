import React, {useContext} from 'react'
import {GlobalState} from '../../../Globalstate'
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

import Loading from '../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios'
import OrderFilters from './OrderFilters';
import Button from 'react-bootstrap/Button';
import './CSOrders.css'
import CSLoadMore from './CSLoadMore';


const useStyles = makeStyles((theme)=>({
    table:{
        minWidth: 850,
        borderCollapse: 'collapse'
        
    },
    tableContainer: {
        marginTop: 30,
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1050,
        marginLeft:50,

        
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        border: '1px solid #ddd',
        borderCollapse: 'collapse'
        
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

function CSOrdersList() {

    const state = useContext(GlobalState)
    const [csorders] = state.csordersAPI.csorders
    
    const [callback, setCallback] = state.csordersAPI.callback
    const [token] = state.token
    const classes = useStyles();
    
    console.log(state)

    const deleteorder = async(id) =>{
      console.log({id})
      
      try{
          
          const deleteorder = axios.delete(`/api/csorder/${id}`, {
              headers: {Authorization: token}
          })

      
          alert('Order deleted successfully')
          await deleteorder
          setCallback(!callback)
          
      }catch(err){
          alert(err)
      }
    }

   
   
    return (
    
    <div class="orders-list-cs">
     <h1 className="titleOrders" style={{marginLeft: '45px'}}>Orders      <ShopIcon /></h1>
     <hr/>
      <OrderFilters/>
      {
                <TableContainer component={Paper}  className={classes.tableContainer} style={{boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                    WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                    MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}} >
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell} >Order ID</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Date and Time</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Customer Name</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Total Price</TableCell>
                      <TableCell className={classes.tableHeaderCell} >Status</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
                      <TableCell className={classes.tableHeaderCell}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {csorders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}} >{(order.orderid)}</TableCell>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{new Date(order.date).toLocaleString()}</TableCell>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}} >
                            <Grid container>
                                <Grid item lg={4}>
                                    <Avatar alt={(order.customername)} src='.' className={classes.avatar}/>
                                </Grid>
                                <Grid item lg= {4}>
                                <Typography className= {classes.name}>{(order.customername)}</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>${(order.totalPrice)}</TableCell>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>
                            <Typography contenteditable="true"  
                            className={classes.status}
                            style={{
                                backgroundColor:
                                ((order.status === 'Completed' && 'green') ||
                                (order.status === 'In Progress' && 'orange') ||
                                (order.status === 'New' && 'blue') ||
                                (order.status === 'Cancel' && 'red'))
                            }}
                            >{(order.status)}</Typography>
                        </TableCell>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{
                            <Button style={{width: '100px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '35px', fontSize: '15px'}} startIcon={<DeleteIcon />} 
                            onClick={() => { if (window.confirm('Are you sure you wish to delete this order?')) deleteorder(order._id) } }
                            >
                            Delete</Button>
                            
                        }</TableCell>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{<Link to={`/view-order/${order._id}`}><Button style={{width: '100px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '35px', fontSize: '15px'}}>
                        View Order</Button></Link>}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      <CSLoadMore/>
      {csorders.length === 0 && <Loading/>}
    </div>
    )
}

export default CSOrdersList

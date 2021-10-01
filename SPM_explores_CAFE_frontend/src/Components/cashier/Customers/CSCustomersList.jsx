
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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ShopIcon from '@mui/icons-material/Shop';
import GroupIcon from '@mui/icons-material/Group';
import Loading from '../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CSLoadMore from '../CSOrders/CSLoadMore';
import { blueGrey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme)=>({
    table:{
        minWidth: 900,
        
        
    },
    tableContainer: {
        marginTop: 30,
        borderRadius: 10,
        margin: '10px 10px',
        maxWidth: 850,
        marginLeft:200,
        display: 'block',
        overflow: 'scroll',
        height: 600
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        border: '1px solid #ddd',
        borderCollapse: 'collapse',
        
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
    },
   
}))
function CSCustomersList() {
    const state = useContext(GlobalState)
    const [cscutomers, setCustomers] = useState([])
    const [setLoading] = useState(false)
    
    const classes = useStyles();
  
    console.log(state)

    useEffect(() => {
     

        axios.get("http://localhost:5000/api/cscustomers").then((res) => {
          console.log(res.data);
          setCustomers(res.data);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    }, []);
   
  
    return (
    
        <div className="orders-list-cs">
     <h1 className="titleOrders" style={{marginLeft: '45px'}}>Customers     <GroupIcon style={{fontSize:'35px'}}/></h1>
      <hr/>
      {
                <TableContainer component={Paper} className={classes.tableContainer} style={{boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}}>
                <Table  aria-label="simple table">
                  <TableHead style={{position: 'sticky', top: '0px'}}>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell} >Customer Name</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Email</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Mobile</TableCell>
                   
                    
                    </TableRow>
                  </TableHead>
                  <TableBody  className={classes.tableBody}>
                    {cscutomers.map((customer) => (
                      <TableRow key={customer._id}>
                        <TableCell style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{(customer.name)}</TableCell>
                        <TableCell  style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{(customer.email)}  <EmailIcon size={45} style={{float: 'right', color: 'blue'}}/></TableCell>
                        <TableCell  style={{borderCollapse: 'collapse', border: '1px solid #ddd'}}>{(customer.mobile)} <LocalPhoneIcon size={45} style={{float: 'right', color: 'blue'}}/></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      <CSLoadMore/>
      {cscutomers.length === 0 && <Loading/>}
    </div>
    )
}

export default CSCustomersList

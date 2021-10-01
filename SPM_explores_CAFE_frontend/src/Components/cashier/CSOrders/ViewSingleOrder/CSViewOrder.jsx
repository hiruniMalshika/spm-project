import React, {useContext, useState, useEffect, useRef} from 'react'
import {GlobalState} from '../../../../Globalstate'
import ReceiptIcon from '@mui/icons-material/Receipt';
import {useParams} from 'react-router-dom'
import './CSViewOrder.css'
import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
    Typography,
    
    } from '@material-ui/core';



import axios from 'axios'

import uniqid from 'uniqid';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";



const useStyles = makeStyles((theme)=>({
    table:{
        minWidth: 850
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1050
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
    },
    img:{
        width: 70,
        height: 100,
        objectFit: 'cover'
    }
}))

function CSViewOrder() {
    const pdfExportComponent = useRef(null);
    const state = useContext(GlobalState)
    const [orderDetails, setOrderDetails] = useState([])
    const [csorders] = state.csordersAPI.csorders
    
    const classes = useStyles();
    const [total, setTotal] = useState(0)
    const [payment, setPayment]= useState()
    const [status, setStatus] = React.useState('Completed');

  const handleChange = (status) => {
    setStatus(status);
  };
        
    
    
   

    const params = useParams()

    useEffect(()=>{
        if(params.id){
            csorders.forEach(item =>{
                if(item._id === params.id) setOrderDetails(item)
                setPayment({
                    orderid: item.orderid,
                    user_id: item.customerid,
                    paymentID: uniqid(),
                    itemList: item.itemList
                }
                )
            })
            
        }
       
        
    }, [params.id, csorders])

    console.log(orderDetails)

    if(orderDetails.length === 0) return null;
    const getTotalAmount = async e=>{
        try{
            const res =  await axios.get(`/api/calculateAmount/${orderDetails._id}`)
            setTotal(res.data.totalAmount);
        }catch(err){
            alert(err) 
        }
    }
   getTotalAmount()

  
   const addPayment = async (e)=>{
       
        try{
            
            await axios.post(`/api/cspayments`, {...payment})
            
            updateOrder()

            alert("Payment added successfully")
        }catch(err){
            alert(err.response.data.msg) 
        }
    }
    const handleExportWithComponent = (event) =>{
        pdfExportComponent.current.save();
    }
    const updateOrder = async(e) =>{
   
        
        await axios.put(`/api/csorderupdate/${params.id}`);
        
         
     }
    return (
        <div className="viewOrder">
           
           <PDFExport ref={pdfExportComponent} scale={0.4}
        paperSize="A4"
        margin="2cm">
            <h1 className="titleReceipt" style={{marginTop: '70px'}}>Order Receipt  <ReceiptIcon/></h1>
             <div className="cusDetails" >
                <div className="row">
                    <div className="col1">
                        <div className="text-gray-light">INVOICE TO:</div>
                        <div className="text-gray-light">Customer Name: {orderDetails.customername}</div>
                    </div>
                    <div className="col2">
                        <h2 className="totalTop">${total}</h2>
                        <div className="text-gray-light">Order Id: {orderDetails.orderid}</div>
                        <div className="text-gray-light">Order Date: {new Date(orderDetails.date).toLocaleDateString()}</div>
                        <div className="text-gray-light">Order Time: {new Date(orderDetails.date).toLocaleTimeString()}</div>
                        <div className="text-gray-light">Status:  
                        <Typography
                        id="status"
                            className={classes.status}
                            style={{
                                backgroundColor:
                                ((orderDetails.status === 'Completed' && 'green') ||
                                (orderDetails.status === 'In Progress' && 'orange') ||
                                (orderDetails.status === 'New' && 'blue') ||
                                (orderDetails.status === 'Cancel' && 'red'))
                            }}>{orderDetails.status}
                            
                        </Typography>
                        </div>

                           
                    </div>
                </div>
             </div>

                <TableContainer component={Paper} className={classes.tableContainer} style={{boxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                    WebkitBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)',
                    MozBoxShadow: '-5px 37px 287px -6px rgba(13,39,224,0.99)'}}>
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell}></TableCell>
                      <TableCell className={classes.tableHeaderCell} >Name</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Quantity</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Unit Price</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Price</TableCell>
                   
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orderDetails.itemList.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell ><img src={order.images.url} alt=""  className={classes.img}/></TableCell>
                        <TableCell >{order.name}</TableCell>
                        <TableCell >{order.sold}</TableCell>
                        <TableCell >${(order.price)}</TableCell>
                        <TableCell >${(order.price) * (order.sold)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <h3 className="bottomTotal">Total Amount: ${total}</h3> 
              </PDFExport> 
              
            <div className="bottomrow">
                <button className="addPaymentBtn" style={{width: '300px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '38px', fontSize: '15px'}}  onClick={addPayment}>Add Payment</button>
                <button className="printbutton" style={{width: '300px', boxShadow: '2px 3px #888888', backgroundColor: '#1e2a78', height: '38px', fontSize: '15px'}} onClick={handleExportWithComponent}>Print</button>
               
            </div>
     </div>
    )
}           
export default CSViewOrder
        
             


         
        
    

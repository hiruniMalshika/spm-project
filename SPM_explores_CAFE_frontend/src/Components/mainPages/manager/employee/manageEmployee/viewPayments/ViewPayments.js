import React, {useContext, useRef} from 'react'
import * as GiIcons from 'react-icons/gi'
import '@progress/kendo-theme-default/dist/all.css';
import {GlobalState} from '../../../../../../Globalstate'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function ViewPayments() {

    const state = useContext(GlobalState)
    const [paymentList] = state.employeePayments.emp_payments_list
    
    const pdfExportComponent= useRef(null)
    
    const handleExportWitthComponent = (event) => {
        pdfExportComponent.current.save();
    }

    return (
        <div>
            
            <div className="empIcon">
                <GiIcons.GiTakeMyMoney />
                <h4>Payment List</h4>
            </div>
            <hr />
            <PDFExport ref={pdfExportComponent} paperSize="A4">
            <div className="view-payment-list-form">
                <button onClick={handleExportWitthComponent} style={{
                    width:'140px',
                    fontSize: '18px',
                    height: '34px',
                    marginTop: '20px'
                }} >Print</button>
                <table style={{
                    width: '100%', 
                    marginTop: '20px'
                }}>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Basic Salary</th>
                            <th>Salary</th>
                            <th>Details of pay date</th>
                            <th>Month of the Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentList.map(singlePayment => (
                                <tr key={singlePayment._id}>
                                    <td>{singlePayment.empName}</td>
                                    <td>{singlePayment.basicSal}</td>
                                    <td>{singlePayment.salary}</td>
                                    <td>{new Date(singlePayment.createdAt).toLocaleDateString()}</td>
                                    <td>{new Date(singlePayment.createdAt).toLocaleString('en-us', { month: 'long' })}</td>
                                    {/**date.toLocaleString('en-us', { month: 'long' }); */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </PDFExport>

        </div>
    )
}

export default ViewPayments

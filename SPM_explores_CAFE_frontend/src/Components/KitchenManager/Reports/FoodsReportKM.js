import React , { useContext, useRef}from 'react'
import { GlobalState } from  '../../../Globalstate'
import * as IoIcons5 from 'react-icons/io5'
import '../Reports/foodsReport.css'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function FoodsReportKM() {
    const state = useContext(GlobalState)
    const [foods] = state.foodsAPI.foods

    console.log(foods)

    const pdfExportComponent= useRef(null)

    const handleExportWitthComponent = (event) => {
        pdfExportComponent.current.save();
    }

     return (
        <div>
            <div className="foodIcon">
                <div className="icon">
                    <IoIcons5.IoFastFood />
                    FOODS ITEMS 
                </div>    
            </div>
            <hr />

            <PDFExport ref={pdfExportComponent} paperSize="A4">
            <div>
                <button onClick={handleExportWitthComponent} style={{width:'140px',
                    fontSize: '18px',
                    height: '34px',
                    marginTop: '20px',
                    color: "black",
                    backgroundColor: "#48D1CC"
                }} >
                Print 
                </button>

                <h2 style= {{fontSize: '45px', marginTop: "5px", marginLeft: "300px"}}>{foods.length}: Food Items Available </h2>

                <table className="report_table">
                    <thead>
                        <tr>
                            <th>Food Name</th> 
                            <th>Food Description</th>
                            <th>Food Ingredients</th>
                            <th>Food Price</th> 
                             
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map(food => (
                                <tr key={food._id}>
                                    <td>{food.name}</td> 
                                    <td>{food.description}</td> 
                                    <td>{food.ingredients}</td> 
                                    <td>{food.price}</td> 
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

export default FoodsReportKM

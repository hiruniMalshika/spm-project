import React , { useContext, useRef}from 'react'
import { GlobalState } from  '../GlobalStateKM'
import * as IoIcons5 from 'react-icons/io5'
import '../Reports/foodsReport.css'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function CategoryReport() {
    const state = useContext(GlobalState)
    const [categories] = state.kmcategoriesAPI.categories

    console.log(categories)

    const pdfExportComponent= useRef(null)

    const handleExportWitthComponent = (event) => {
        pdfExportComponent.current.save();
    }

    return (
        <div>
            <div className="foodIcon">
                <div className="icon">
                    <IoIcons5.IoFastFood />
                    CATEGORY ITEMS 
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

                <h2 style= {{fontSize: '45px', marginTop: "5px", marginLeft: "300px"}}>Total {categories.length} Categories  </h2>


                <table className="report_table">
                    <thead>
                        <tr>
                            <th>Food Name</th> 
                            <th>Food Description</th>
                            
                             
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category =>  (
                                <tr>
                                    <td>{category.categoryName}</td>
                                    <td>{category.status}</td>
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

export default CategoryReport

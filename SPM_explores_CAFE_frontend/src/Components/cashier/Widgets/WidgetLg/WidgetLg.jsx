import React, { useState, useEffect } from "react";
import './WidgetLg.css';
import axios from "axios";
import {GlobalState} from '../../../../Globalstate'
function WidgetLg() {
    const [products,setProducts] = useState([]);

  useEffect(() => {
        axios.get("http://localhost:5000/api/foods").then((res) => {
            console.log(res.data.foods);
            setProducts(res.data.foods);
          })
          .catch((err) => {
            alert(err);
          });

      }, []); 
    
    return (
        <div className="widgetLg">
             <h3 className="widgetLgTitle"> Top Products</h3>
             <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh"></th>
                <th className="widgetLgTh">Product Name</th>
                <th className="widgetLgTh">Units Per Price</th>      
                <th className="widgetLgTh">Category</th>               
            </tr>
                 
                 {
                      products.map(item =>(
                        <tr className="widgetLgTr" key={item._id}>
                            <td className="widgetLgProduct"><img src={item.images.url} alt="" className="widgetLgImg"/></td>
                            <td className="widgetLgName">{item.name}</td>
                            <td className="widgetLgPrice">{item.price}</td>
                            <td className="widgetLgCategory">{item.category}</td>
                        </tr>
                      ))
                 }
                

             </table>
        </div>
    )
}

export default WidgetLg

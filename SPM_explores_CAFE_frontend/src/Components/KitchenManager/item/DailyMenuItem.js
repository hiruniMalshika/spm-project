import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "../item/daily.css"

function DailyMenuItem({menu, callback, setCallback}) {

        const deleteDailyMenu = async () => {
            console.log(menu)
            try {
                const deleteDaily = axios.delete(`http://localhost:5000/api/dailymenu/${menu._id}`)

                await deleteDaily
                setCallback(!callback)

            } catch (err) {
                alert(err.response.data.mes)
            }
        }

       return (
        <div className="dailymenu_card" >
            <div className="dailymenu_box">
                    <h2 name={menu.menu_name}>{menu.menu_name}</h2>
                    
                    <p>{menu.foods}</p>
                     
                    <span1>Date : {menu.date}</span1>
            </div> 

            <div className="row_btn">
                 
                <Link id="btn_view"  to={`/editdaily/${menu._id}`} >Edit</Link>
                <Link id="btn_delete"  to={"#"} onClick={deleteDailyMenu} >Delete</Link>
                {/* <Link to="#" onClick={deleteCategory} id="btn_view">Remove</Link> */}
            </div>
        </div>
    )
}

export default DailyMenuItem

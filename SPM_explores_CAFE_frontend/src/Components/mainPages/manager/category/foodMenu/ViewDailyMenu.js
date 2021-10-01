import React, {useContext} from 'react'
import {GlobalState} from '../../../../../Globalstate'
//import {useParams} from 'react-router-dom'
import * as IoIcons5 from 'react-icons/io5'

function ViewDailyMenu() {
    const state = useContext(GlobalState)
    const [dailyMenuItem] = state.categoryAPI.daily_menu
console.log(dailyMenuItem)
    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Food Menu</h4>
            </div>
            <hr/>
            <div className="food-menu-table">
                <table>
                    <thead>
                        <tr>
                            <th>Menu ID</th>
                            <th>Menu Name</th>
                            <th>Food</th>
                            <th>Valid date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dailyMenuItem.map(singleItem => (
                                <tr key={singleItem._id}>
                                    <td>{singleItem.dailymenu_id}</td>
                                    <td>{singleItem.menu_name}</td>
                                    <td>{singleItem.foods}</td>
                                    <td>{new Date(singleItem.date).toLocaleDateString()}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewDailyMenu

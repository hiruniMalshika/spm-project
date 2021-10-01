import React, { useContext } from 'react'
import { GlobalState } from  '../GlobalStateKM'
import * as IoIcons5 from 'react-icons/io5'
import DailyMenuItem from '../item/DailyMenuItem'



function KMViewDailyMenu() {
    const state = useContext(GlobalState)
    const [dailymenus] = state.kmdailyMenuAPI.dailymenu_List
    const [token ] = state.token

    console.log(dailymenus)

    return (
        <div>
            <div className="foodIcon">
                <div className="icon">
                    <IoIcons5.IoFastFood />
                    Daily Menu 
                </div>    
            </div>
            <hr />
            <div className="foods">
                <div className="foodslist">
                    {
                        dailymenus.map(menu => {
                            return <DailyMenuItem key={menu._id} menu={menu}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default KMViewDailyMenu

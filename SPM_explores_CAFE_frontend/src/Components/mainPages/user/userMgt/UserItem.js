import React, {useContext} from 'react'
import {GlobalState} from '../../../../Globalstate'


function UserItem({display}) {
    const state = useContext(GlobalState)
    return (
        <div>
           <h2>Name: {display.name}</h2> 
           <h2>Name: {display.email}</h2> 
           <h2>Name: {display.mobile}</h2> 
           <h2>Name: {display.role}</h2> 
           
           

        </div>
    )
}

export default UserItem

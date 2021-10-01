import React, {useContext} from 'react'
import { GlobalState } from '../../../../Globalstate'
import UserItem from './UserItem'

function UserMgt() {
    const state = useContext(GlobalState)
    const [display] = state.displayUser.display
    console.log(display)
    return (
        <div>
       {
           display.map(dis => {
               return <UserItem key={dis._id} dis={dis}/>
           })
       }
        )
            
        </div>
    )
}

export default UserMgt

import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters(){
    const state = useContext(GlobalState)
    const [sort, setSort] = state.reportsAPI.sort
    


    return(
        <div className="filter_menu">
            
            
            <div className="row">
                <span>Sort By: </span>
                <select  value={sort} onChange={e => setSort(e.target.value)}>
                    <option value='' >Newest</option>
                    <option value='sort=oldest' >Oldest</option>
                    <option value='sort=-sold' >Best sales</option>
                    
                </select>
            </div>
        
        </div>
    )
}
export default Filters
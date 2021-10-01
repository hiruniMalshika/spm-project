import React, {useContext} from 'react'
import {GlobalState} from '../../../../../Globalstate'
import {Link} from 'react-router-dom'
function ReportFilters() {
    
    const state = useContext(GlobalState)
    const [sort, setSort] = state.reportsAPI.sort

    


    return (
        <div className="orderfiltermenu" style={{display: 'flex', marginLeft: '20px'}}>
            
        
        <div className="orderfilterrow" style={{width: '150px', marginLeft: '500px'}}>
            <span>Sort By: </span>
            <select style={{backgroundColor: '#1e2a78', borderRadius: '10px', height: '40px', color: 'white'}} value={sort} onChange={e => setSort(e.target.value)}>
                <option value='' >Newest</option>
                <option value='sort=oldest' >Oldest</option>
                
            </select>
        </div>
    
    </div>
    )
}

export default ReportFilters

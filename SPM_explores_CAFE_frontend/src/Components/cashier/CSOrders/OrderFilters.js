
import React, {useContext} from 'react'
import {GlobalState} from '../../../Globalstate'
import {
    makeStyles,
    
    } from '@material-ui/core';
import { flexbox } from '@mui/system';


function OrderFilters() {

    const state = useContext(GlobalState)
  
   
    
    const [sort, setSort] = state.csordersAPI.sort
    const [search, setSearch] = state.csordersAPI.search

  
    return (
        <div  className="orderfiltermenu" style={{display: 'flex', marginLeft: '20px'}}>
            
            <input style={{width: '500px', marginLeft: '23px', marginTop: '18px'}} type="text" value={search} placeholder="Enter your search!" onChange={e => setSearch(e.target.value.toLowerCase())}/>
            
            <div className="orderfilterrow" style={{width: '150px', marginLeft: '390px'}}>
                <span >Sort By: </span>
                <select style={{backgroundColor: '#1e2a78', borderRadius: '10px', height: '40px', color: 'white'}}  value={sort} onChange={e => setSort(e.target.value)}>
                    <option  value='' >Newest</option>
                    <option   value='sort=oldest' >Oldest</option>
                    <option  value='sort=-totalPrice' >Price:High-Low</option>
                    <option   value='sort=+totalPrice' >Price:Low-High</option>
                    
                </select>
            </div>
        
        </div>
    )
}

export default OrderFilters

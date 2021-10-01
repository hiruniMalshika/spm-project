import React, {useContext} from 'react'
import {GlobalState} from '../../../../../Globalstate'

function Filter() {
    const state =  useContext(GlobalState)
    const [employees, setEmployees] = state.employeeAPI.employeeList
    const [sort, setSort] = state.employeeAPI.sort
    const [search, setSearch] = state.employeeAPI.search

    const handleCategory = e => {
        setSearch('')
    }

    return (
        <div className="filter_menu">
            {/*<div className="row">
                <span>Filters: </span>
                <select name="designation" value>
                    .
                </select>
            </div>*/}
            <input type="text" value={search} placeholder="Enter Employee Name" 
                onChange={e => setSearch(e.target.value.toLowerCase())} />
        </div>
    )
}

export default Filter

import React, {useContext} from 'react'
import {GlobalState} from '../../../../Globalstate'

function Filters() {
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.menuAPI.foods
    // const [category, setCategory] = state.menuAPI.foods
    const [sort, setSort] = state.menuAPI.sort
    const [search, setSearch] = state.menuAPI.search
    return (
        <div className="filter_menu">
            <div className="row">
                {/* <span>Filters: </span> */}
                {/* <select name="category" id=""></select> */}
                <input type="text" value={search} placeholder="Search your favourite Menu"
                    onChange={e => setSearch(e.target.value)}
                />

                <div className="row">
                    <span>Sort By: </span>
                    <select value={sort} onChange={e => setSort(e.target.value)}>
                        <option value=''>Newest</option>
                        <option value='sort=oldest'>Oldest</option>
                        <option value='sort=-sold'>Best Sales</option>
                        <option value='sort=-price'>Price: High-Low</option>
                        <option value='sort=price'>Price: Low-High</option>

                    </select>
                </div>

            </div>
        </div>
    )
}

export default Filters

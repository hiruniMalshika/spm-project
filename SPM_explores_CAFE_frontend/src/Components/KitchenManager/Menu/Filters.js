import React, {useContext} from 'react'
import './filter.css'
import { GlobalState } from '../GlobalStateKM'


function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.kmcategoriesAPI.categories

    const [category, setCategory] = state.foodsAPI.category
    const [sort, setSort] = state.foodsAPI.sort
    const [search, setSearch] = state.foodsAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filters: </span>
                <select name ="category" value={category} onChange={handleCategory}>
                    <option value=''>All Foods</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.categoryName}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Enter Your Search" 
             onChange={e => setSearch(e.target.value.toLocaleLowerCase())} /> 
            
            <div className="row">
                <span>Sort By: </span>
                <select   value={sort} onChange={e => setSort(e.target.value)}>
                     <option value='' >Newest</option>
                     <option value='sort=oldest' >Oldest</option>  
                </select>
            </div>

        </div>
    )
}

export default Filters

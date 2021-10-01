import React, {useContext} from 'react'
import {GlobalState} from "../../GlobalStateKM"
import * as IoIcons5 from 'react-icons/io5'
import CategoryItem from '../view/KMItemC'

function KMListC() {
    const state = useContext(GlobalState)
    const [categories] = state.kmcategoriesAPI.categories

    console.log(categories)

    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Category List</h4>
            </div>
            <hr/>

            <div className="categorys" style={{marginTop:'46px', marginBottom: '20px'}}>
                {
                    categories.map(category => {
                        return <CategoryItem key={category._id} category={category}   />
                    })
                }
            </div>
            
        </div>
    )
}

export default KMListC

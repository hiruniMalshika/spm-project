import React, {useContext} from 'react'
import {GlobalState} from '../../../../../Globalstate'
import * as IoIcons5 from 'react-icons/io5'
import CategoryItem from './CategoryItem'

function CategoryList() {
    const state = useContext(GlobalState)
    const [categories] = state.categoryAPI.categories
    const [callBack, setCallBack] = state.categoryAPI.callback
    
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
                        return <CategoryItem key={category._id} category={category} callBack={callBack} setCallBack={setCallBack} />
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList

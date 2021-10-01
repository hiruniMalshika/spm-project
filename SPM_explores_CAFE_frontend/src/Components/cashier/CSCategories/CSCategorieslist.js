import React, {useContext} from 'react'
import {GlobalState} from '../../../Globalstate'
import * as IoIcons5 from 'react-icons/io5'
import CSCategoryItem from './CSCategoryItem'
import './CSCategory.css'
function CSCategorieslist() {
    const state = useContext(GlobalState)
    const [categories] = state.categoryAPI.categories
    const [callBack, setCallBack] = state.categoryAPI.callback
    
    return (
        <div>
            <div className="foodIcon">
                
                <h1 className="categorytitle" style={{marginLeft: '45px'}} >Category List    <IoIcons5.IoFastFood /></h1>
            </div>
            <hr/>

            <div className="categorys" style={{marginTop:'46px', marginBottom: '20px'}}>
                {
                    categories.map(category => {
                        return <CSCategoryItem key={category._id} category={category} callBack={callBack} setCallBack={setCallBack} />
                    })
                }
            </div>
        </div>
    )
}

export default CSCategorieslist

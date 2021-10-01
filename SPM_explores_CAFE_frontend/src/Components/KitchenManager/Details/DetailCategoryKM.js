import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../GlobalStateKM'
 


function DetailCategoryKM() {

    const params = useParams()
    const state = useContext(GlobalState)
    const [categories] = state.kmcategoriesAPI.categories
    const [detailCategory, setdetailCategory] = useState([])
    
    useEffect(() =>{
        if(params.id){
            categories.forEach(Category => {
                if(Category._id === params.id) setdetailCategory(Category)
            })
        }

    },[params.id, categories])
    if(detailCategory.length === 0) return null;

    console.log(detailCategory)

    return (
         <>
            <div className="detail"  >
                <img src={detailCategory.images.url} alt=""/>
                <div className="box-detail">

                    <div className="row">
                        <h3>CategoryID: {detailCategory.category_id}</h3>
                    </div>

                    <h2>{detailCategory.categoryName}</h2>                  
                    
                    <div className="row">
                        <span>Status :  {detailCategory.status}</span>
                        
                    </div>

                    <Link id="b_button" to="/kmcategory" >Back</Link> 
                    <Link id="c_button" to="/menu/foods" >View Foods</Link>
                    
                    
                </div>
                 
            </div>
            
         </>
    )
}

export default DetailCategoryKM

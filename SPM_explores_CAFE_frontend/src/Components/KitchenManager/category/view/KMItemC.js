import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
 


function KMItemC({category}) {
    const deleteCategory = async () => {
        try {
            const destroyImg = axios.post('/upload/destroy', {public_id: category.images.public_id})

            const deleteCategory = axios.delete(`/api/category/${category._id}`)

            await destroyImg
            await deleteCategory
             
        } catch (err) {
            alert(err.responce.data.msg)
        }
    }

    return (
        <div className="category_card">
            <img src={category.images.url} alt="" />

            <div className="category_box">
                <h2 title={category.categoryName}>{category.categoryName}</h2>
                <span>{category.status}</span>
            </div>

            <div className="row_btn">
                {/* <Link id="btn_buy" to={`category_detail/${category._id}`} >
                    Edit
                </Link> */}
                <a id="btn_view" href={`/detailc/${category._id}`}>View</a>
                {/* <Link to="#" onClick={deleteCategory} id="btn_view">Remove</Link> */}
            </div>
        </div>
    )
}

export default KMItemC

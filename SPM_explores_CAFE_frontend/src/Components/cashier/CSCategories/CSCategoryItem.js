import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CSCategoryItem({category, callBack, setCallBack}) {

    const deleteCategory = async () => {
        try {
            const destroyImg = axios.post('/upload/destroy', {public_id: category.images.public_id})

            const deleteCategory = axios.delete(`/api/category/${category._id}`)

            await destroyImg
            await deleteCategory
            setCallBack(!callBack)
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

            
        </div>
    )
}

export default CSCategoryItem

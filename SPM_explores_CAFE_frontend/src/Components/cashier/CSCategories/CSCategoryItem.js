import React from 'react'


function CSCategoryItem({category, callBack, setCallBack}) {

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

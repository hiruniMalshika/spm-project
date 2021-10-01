import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../Globalstate'
import FoodItem from '../../user/menu/foodItem/FoodItem'

function DetailProduct(){
    const params = useParams()
    const state = useContext(GlobalState)
    const [foods] = state.menuAPI.foods
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){
            foods.forEach(food => {
                if(food._id === params.id) setDetailProduct(food)
            })
        }

    },[params.id, foods])
    if(detailProduct.length === 0) return null;
    return(
        <div>
        <div className="detail-user">
            <img src={detailProduct.images.url} alt=""/>
            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.name}</h2>
                    <h6>code: {detailProduct.food_id}</h6>
                </div>
                
                <span>Rs. {detailProduct.price}</span>
                <p>Ingredients: {detailProduct.ingredients}</p>
                <p>Category: {detailProduct.category}</p>
                <p>Sold: {detailProduct.sold}</p>
                <p>Description: {detailProduct.description}</p>

                <Link to="/cart" className="cart"
                onClick={() => addCart(detailProduct)}
                >Buy Now</Link>

            </div>
        </div>

        <div>
            
            <h2>Related Products</h2>
            <div className="foods">
            {
                //food map comment added
                foods.map(food => {
                    return food.category === detailProduct.category
                    ? <FoodItem key={food._id} food={food} /> : null
                })
            }
            
            </div>

        </div>
        </div>
    )
}

export default DetailProduct
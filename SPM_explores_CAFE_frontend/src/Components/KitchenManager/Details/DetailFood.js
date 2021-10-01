import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../GlobalStateKM'
import FoodItem from '../item/FoodItem'

function DetailFood() {
      const params = useParams()
      const state = useContext(GlobalState)
      const [foods] = state.foodsAPI.foods
      const [detailProduct, setDetailProduct] = useState([])

      useEffect(() =>{
        if(params.id){
            foods.forEach(food => {
                if(food._id === params.id) setDetailProduct(food)
            })
        }

    },[params.id, foods])
    if(detailProduct.length === 0) return null;

    // console.log(detailProduct)

    return (
        <>
        <div className="detail">
             <img src={detailProduct.images.url} alt=""/>
             <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.name}</h2>
                    <h6>FoodID: {detailProduct.food_id}</h6>
                </div>
                
                
                <div className="row">
                    <span>Rs. {detailProduct.price}</span>
                    <p>Sold: {detailProduct.sold}</p>
                </div>
                <div className="row">
                    <p>Ingredients: {detailProduct.ingredients}</p>
                    
                </div>
                <p>Category: {detailProduct.category}</p>
                
                
                <p>Description: {detailProduct.description}</p>
                
                <Link id="w_button" to="/menu/foods" >Back</Link> 
             </div>
        </div>

        <div className="foods">
            
            <h2>Related Food Items In the Cafe</h2>
            <div className="foods">
                <div className="foodslist">
                    {
                        
                        foods.map(food => {
                            return food.category === detailProduct.category
                            ? <FoodItem key={food._id} food={food} /> : null
                        })
                    }
                </div>
            </div>

        </div>
        </>
        
    )
}

export default DetailFood

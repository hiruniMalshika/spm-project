import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function FoodItem({food, callback, setCallback}) {

    const deleteFood = async () => {
        
        try {
            console.log(food)
            const destroyImg =  axios .post('http://localhost:5000/api/destroy', { public_id: food.images.public_id })
            const deleteFood =  axios .delete(`http://localhost:5000/api/foods/${ food._id }` )

            await destroyImg
            await deleteFood

            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.mes)
        }
    }

    return (
        <div className="food_card" >
            
            <img src={food.images.url} alt="" /> 

            <div className="food_box">

                    <h2 name={food.name}>{food.name}</h2>
                    <span>${food.price}</span>                   
                    <p>{food.description}</p>
                    <span>Ingredients: {food.ingredients} </span>
                    {/* <p>Category : {food.category}  </p> */}
                     
                     
            </div>

            <div className="row_btn">

                    {/* <Link id="btn_view" to={`detail/${food._id}`}>
                        View
                    </Link> */}
                    <a id="btn_view" href={`/detail/${food._id}`}>View</a>
                    
                    <Link id="btn_delete"  to={`/edit/${food._id}`} >Edit</Link> 
                    <Link id="btn_delete"  to= "#" onClick={deleteFood}> Delete</Link> 

            </div>
            
        </div>
    )
}

export default FoodItem

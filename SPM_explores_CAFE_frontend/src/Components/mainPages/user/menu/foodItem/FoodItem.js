import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../../Globalstate'

function FoodItem({food}) {
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    
    return(
        
      
        
        <div className="food_cards" >
                
      
               <img src={food.images.url} alt="" /> 

                <div className="food_boxs">
                    {/* //class name changed again*/}

                    <h2 name={food.name}>{food.name}</h2>
                    <span>Rs.{food.price}</span>
                    <p>{food.description}</p>
                    <span>Intregents : {food.ingredients}</span>

                </div>
                <div className="row_btns">
                    <Link id="btns_buy" to="#!" onClick={() => addCart(food)}>
                        Buy
                    </Link>
                    <Link id="btns_view" to={`/detail/${food._id}`}>
                        View
                    </Link>
                    

                </div>

        </div>
        
        
        
    )
}
export default FoodItem
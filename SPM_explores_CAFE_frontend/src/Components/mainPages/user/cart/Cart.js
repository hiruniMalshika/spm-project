import React, {useContext, useState, useEffect, useRef} from 'react'
import { GlobalState } from '../../../../Globalstate'
import {Link} from 'react-router-dom'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { FaProductHunt } from 'react-icons/fa'
import axios from 'axios'

export default function Cart() {

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event) =>{
        pdfExportComponent.current.save();
    }    

    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }
        getTotal()
    },[cart])

    const addToCart = async () =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }

    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })
        setCart([...cart])
        addToCart()
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })
        setCart([...cart])
        addToCart()
    }

    const removeFood = id =>{
        if(window.confirm("Do you need to remove this from order list?")){
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
            addToCart()
        }
    }



    if(cart.length === 0)
        return <h2 style={{textAlign:"center", fontSize:"5rem"}}>Empty Cart</h2>
    return (
        <div>
        <PDFExport ref={pdfExportComponent} paperSize="A4">
            {
                cart.map(food => (
                    <div className="detail cart" key={food._id}>
                        <img src={food.images.url} alt="" />
                        <div className="box-cart">
                    
                                <h2>{food.name}</h2>
                        
                              
                            
                                <h3>Rs. {food.price * food.quantity}</h3>
                                <p>Ingredients: {food.ingredients}</p>
                                <p>Category: {food.category}</p>
                                <p>Sold: {food.sold}</p>
                                <p>Description: {food.description}</p>

                                <div className="amount">
                                    <button onClick={() => decrement(food._id)}> - </button>
                                    <span>{food.quantity}</span>
                                    <button onClick={() => increment(food._id)}> + </button>
                                </div>
                                
                                {/* delete button */}
                                <div className="delete" onClick={() => removeFood(food._id)}>X</div>
                            
                            

            </div>
        </div>
                ))
            }
            <div className="total">
                <h3>Total Bill : Rs. {total}.00</h3>
                <Link to="#!" className="placeLink">Place Order</Link>
                <button onClick={handleExportWithComponent}>Generate a report</button>
            </div>
            </PDFExport>
        </div>
    )
}

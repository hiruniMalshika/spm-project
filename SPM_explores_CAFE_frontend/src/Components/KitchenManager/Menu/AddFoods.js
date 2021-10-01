import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import * as IoIcons5 from 'react-icons/io5'
import {GlobalState} from '../GlobalStateKM'
import {useParams} from 'react-router-dom'

const initialState = {
    food_id: '',
    name: '',
    description: '',
    ingredients: '',
    price: 0,
    status: '',
    category: '',
     
     
}
function AddFoods() {
    const state = useContext(GlobalState)
    const [food, setFood] = useState(initialState)
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    const [categories] = state.kmcategoriesAPI.categories

    console.log(categories)

    const param = useParams()

    const [foods ] = state.foodsAPI.foods
    const [onEdit, setonEdit] = useState(false)

    useEffect(() => {
        if(param.id){
            setonEdit(true)
            foods.forEach(food => {
                if(food._id === param.id) {
                    setFood(food)
                    setImages(food.images)
                }
            })
        }else {
            setonEdit(false)
            setFood(initialState)
            setImages(false)
        }
    }, [param.id], foods)

    const handleUpload = async e => {
        e.preventDefault()
        try {

            const file = e.target.files[0]

            if(!file) return alert("File not uploaded.")

            if(file.size > (1024 * 1024) * 12)
                return alert("File is too large.")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)
            setLoading(true)
            const res = await axios.post('http://localhost:5000/api/upload', formData)
            setLoading(false)
            setImages(res.data)
            // console.log(res)

        } catch (err) {
            alert (err.response.data.msg)
        }
    }

    const handleDestroy = async e => {
        try {
            setLoading(true)
            await axios.post('http://localhost:5000/api/destroy', {public_id: images.public_id})
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.responce.data.msg)
        }
    }

    const handleChangeInput = e => { 
        const {name, value} = e.target
        setFood({...food, [name]:value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if(!images) return alert("No image upload")
            
            if(onEdit){
                await axios.put(`http://localhost:5000/api/foods/${food._id}`, {...food, images})    
            }else{
                await axios.post('http://localhost:5000/api/foods/', {...food, images})    
            }
            console.log(food)

            setImages(false)
            setFood(initialState)
             
        } catch (err) {
            alert("error occur")
        }
    }


    const styleUpload = {
        display: images ? "block" : "none"
    }


    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Add Foods</h4>
            </div>
            <hr />

            <div className="create_food">
                <div className="upload">
                    <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                    {
                            loading ? <div id="file_img"><Loading /></div>

                            :<div id="file_img" style={styleUpload} >
                                <img src={images ? images.url : ''} alt="" />
                                <span onClick={handleDestroy}>X</span>
                            </div>
                    }
                </div>

                <form  className="Container" onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="food_id" style= {{fontSize: '25px'}} >Food ID</label>
                            <input type="text" name="food_id" id="food_id" required 
                            value={food.food_id} onChange={handleChangeInput} disabled={food.id}/>
                    </div>

                    <div className="row">
                        <label htmlFor="name" style= {{fontSize: '25px'}}>Name</label>
                            <input type="text" name="name" id="name" required 
                            value={food.name} onChange={handleChangeInput} />
                    </div>

                    <div className="row">
                        <label htmlFor="description" style= {{fontSize: '25px'}}>Description</label>
                            <textarea type="text" name="description" id="description" required 
                            value={food.description} rows="8" onChange={handleChangeInput}  />
                    </div>

                    <div className="row">
                        <label htmlFor="ingredients" style= {{fontSize: '25px'}}>Ingredients</label>
                            <textarea type="text" name="ingredients" id="ingredients" required 
                            value={food.ingredients} rows="5" onChange={handleChangeInput} />
                    </div>

                    <div className="row">
                        <label htmlFor="price" style= {{fontSize: '25px'}}>Price</label>
                            <input type="number" name="price" id="price" required 
                            value={food.price} onChange={handleChangeInput} />
                    </div>
                                
                    <div className="row">
                        <label htmlFor="categories">Categories :</label>
                            <select name="category" value={food.category} onChange={handleChangeInput}>
                                <option value="">Please Select a Category</option>
                                    {
                                        categories.map( category => (
                                            <option value={category._id} key={category._id}>
                                                {category.categoryName}
                                                
                                            </option>
                                        ))
                                    }
                                    
                            </select>
                            
                                
                    </div>

                    <button type="submit" style={{fontSize: "24px"}}>{onEdit ? "Update" : "ADD"}</button>

                </form>
            </div>
        </div>
    )
}

export default AddFoods

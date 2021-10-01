import React, {useState, useEffect, useContext} from 'react'
import * as IoIcons5 from 'react-icons/io5'
import { GlobalState } from '../../../../../Globalstate'
import axios from 'axios'
import Loading from '../../../../../loading/Loading'
import { useParams } from 'react-router-dom'

const initialState = {
    category_id: '',
    categoryName: '',
    status: '',
    _id: ''
}

function CreateCategory() {
    const state = useContext(GlobalState)
    const [category, setCategory] = useState(initialState)
    const [categorys] = state.categoryAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    const param = useParams()
    const [onEdit, setOnEdit] = useState(false)

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            categorys.forEach(category => {
                if(category._id === param.id){
                    setCategory(category)
                    setImages(category.images)
                }
            })
            
        }else{
            setOnEdit(false)
            setCategory(initialState)
            setImages(false)
        }
    }, [param.id, categorys])

    const handleChangeInput = e => { 
        const {name, value} = e.target
        setCategory({...category, [name]:value})
    }

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
            const res = await axios.post('/upload/uploadImage', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            setLoading(false)
            setImages(res.data)
        } catch (err) {
            alert(err.responce.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            setLoading(true)
            await axios.post('/upload/destroy', {public_id: images.public_id})
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.responce.data.msg)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if(!images) return alert("No image upload")

            //await axios.post('http://localhost:5000/api/category', {...category, images})
            if(onEdit){
                await axios.put(`/api/category/${category._id}`, {...category, images})
                setImages(false)
                setCategory(initialState)
                alert("Category Updated...")
            }else{
                await axios.post('/api/category', {...category, images})
                setImages(false)
                setCategory(initialState)
                alert("Category Added...")
            }
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
                <h4>Add Category</h4>
            </div>
            <hr />

            <div className="create_category">
                <div className="upload">
                    <input type="file" name="file" id="file_up" onChange={handleUpload} />
                    {
                        loading ? <div id="file_img"><Loading /></div>

                        :<div id="file_img" style={styleUpload}>
                            <img src={images ? images.url : ''} alt="" />
                            <span onClick={handleDestroy}>X</span>
                        </div>
                    }
                </div>

                <div className="main-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label htmlFor="category_id">Category ID</label>
                            <input type="text" name="category_id" id="productid" required value={category.category_id} 
                                onChange={handleChangeInput}/>
                        </div>

                        <div className="form-row">
                            <label htmlFor="categoryName">Category Name</label>
                            <input type="text" name="categoryName" id="categoryName" required value={category.categoryName} 
                                onChange={handleChangeInput}/>
                        </div>

                        <div className="form-row">
                            <label htmlFor="status">Status</label>
                            <select name="status" onChange={handleChangeInput} >
                                <option>Select One</option>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                        </div>
                        <button type="submit">{onEdit? "Update" : "Save"}</button>
                    </form>
                </div>

                
            </div>
        </div>
    )
}

export default CreateCategory

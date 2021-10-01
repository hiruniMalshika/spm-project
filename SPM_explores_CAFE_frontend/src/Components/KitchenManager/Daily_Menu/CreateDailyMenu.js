import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import * as IoIcons5 from 'react-icons/io5'
import {GlobalState} from '../GlobalStateKM'
import {useParams} from 'react-router-dom'


const initialState = {
    dailymenu_id: '',
    menu_name: '',
    date: '', 
    foods: '',
    _id: ''
     
     
}

function CreateDailyMenu() {
    const state = useContext(GlobalState)
    const [menu, setmenu] = useState(initialState)
    const [foods] = state.foodsAPI.foods

    console.log(foods)

    const param = useParams()
    const [dailymenu] = state.kmdailyMenuAPI.dailymenu_List
    const [onEdit, setonEdit] = useState(false)
    
    useEffect(() => {
        if(param.id){
            setonEdit(true)
            dailymenu.forEach(menu => {
                if(menu._id === param.id ) {
                    setmenu(menu)
                }
            })
        }else {
            setonEdit(false)
            setmenu(initialState)
        }
    }, [param.id], dailymenu)

    const handleChangeInput = e => {
        const {name, value} = e.target
        setmenu({...menu, [name]:value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if(onEdit){
                await axios.put(`http://localhost:5000/api/dailymenu/${menu._id}`, {...menu})

            }else{
                await axios.post('http://localhost:5000/api/dailymenu', {...menu})
                 console.log(menu) 
            } 
            setmenu(initialState) 
        } catch (err) {
            alert("error occur")
        }
    }

    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>Add Foods</h4>
            </div>
            <hr />
            <div className="create_daily">
                <form className="Container" onSubmit={handleSubmit} >
                    <div className="row">
                        <label htmlFor="dailymenu_id" style= {{fontSize: '25px'}}> Dailymenu ID </label>
                        <input type="text" name="dailymenu_id" id="dailymenu_id" required 
                        value={menu.dailymenu_id} onChange={handleChangeInput} disabled={onEdit} /> 
                    </div>

                    <div className="row">
                        <label htmlFor="menu_name" style= {{fontSize: '25px'}}> Menu Name </label>
                        <input type="text" name="menu_name" id="menu_name" required 
                        value={menu.menu_name} onChange={handleChangeInput}/> 
                    </div>

                    <div className="row">
                        <label htmlFor="date" style= {{fontSize: '25px'}}> Dailymenu ID </label>
                        <input type="date" name="date" id="date" required 
                        value={menu.date} onChange={handleChangeInput}/> 
                    </div>

                    <div className="row">
                        <label htmlFor="date" style= {{fontSize: '25px'}}> Selct Food Item </label>
                         
                    </div> 

                    <div className= "Container">
                        <div className="row">
                            <label htmlFor="foods" style= {{fontSize: '25px'}}> </label>
                                <select name="foods" value={menu.foods} onChange={handleChangeInput} >
                                    <option>Please Selct A Food Item</option>
                                        {
                                            foods.map(foods => (
                                                <option value={foods.dailymenu_id} key={foods.dailymenu_id}> 
                                                    {foods.name}
                                                </option>

                                            ))
                                        }

                                </select>
                        </div>
 

                    </div>

                    

                    <button type="submit" >{onEdit ? "Update" : "ADD"}</button>

                </form>
            </div>

            
        </div>
    )
}

export default CreateDailyMenu

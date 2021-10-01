import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import * as IoIcons5 from 'react-icons/io5'
import {GlobalState} from '../GlobalStateKM'


const initialState = {
    message_id: '',
    title: '',
    description: '',
   
}

function AddMessageKM() {
    const state = useContext(GlobalState)
    const [message, setMessage] = useState(initialState)

    console.log(message)

    const param = useParams()
    const [messageskm ] = state.KMmessagesAPI.messageskm


    return (
        <div>
            <div className="messageIcon">
                <IoIcons5.IoFastFood />
                <h4>Add Foods</h4>
            </div>
            <hr />

            <div className="create_message">
                <form>
                    <div className="row">
                        <label htmlFor="message_id" style= {{fontSize: '25px'}}>Meessage ID</label>
                            <input type="text" name="message_id" id="message_id" required 
                            value={message.message_id}></input>
                    </div>

                    <div className="row">
                        <label htmlFor="title" style= {{fontSize: '25px'}}>Title</label>
                            <input type="text" name="title" id="title" required 
                            value={message.title}></input>
                    </div>

                    <div className="row">
                        <label htmlFor="description" style= {{fontSize: '25px'}}>Description</label>
                            <input type="text" name="description" rows="8" id="description" required 
                            value={message.title}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMessageKM

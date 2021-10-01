import React, {useContext, useEffect, useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { GlobalState } from '../../../../../Globalstate'

const initialState = {
    status: '',
    userName: '',
    subject: '',
    message: ''
}

function ReplyMessage() {
    const state = useContext(GlobalState)
    const param = useParams()
    const [messages] = state.messageAPI.userMessage
    const [message, setMessage] = useState(initialState)
    const [onEdit, setOnEdit] = useState(false)

    useEffect(() => {
        setOnEdit(true)
        messages.forEach(message => {
            if(message._id === param.id){
                setMessage(message)
            }
        })
    }, [param.id, messages])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setMessage({...message, [name]:value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(onEdit){
            await axios.put(`/api/message/${message._id}`, {...message})
            setMessage(initialState)
            alert("Status changed")
        }
    }

    return (
        <div>
            <div className="empIcon">
                <AiIcons.AiOutlineMessage />
                <h4>Reply</h4>
            </div>
            <hr />

            <div className="reply-message-form">
                <form onSubmit={handleSubmit}>
                    <div className="reply-form-row">
                        <label htmlFor="username">Username</label><br/>
                        <input type="text" name="username" id="username" 
                            value={message.userName}
                            required onChange={handleChangeInput} />
                    </div>
                    <div className="reply-form-row">
                        <label htmlFor="subject">Subject</label><br/>
                        <input type="text" name="subject" id="subject" 
                            value={message.subject} required 
                            onChange={handleSubmit} />
                    </div>
                    <div className="reply-form-row">
                        <label htmlFor="message">Message</label><br/>
                        <textarea type="text" name="message" id="message" rows="6" style={{
                            width:'100%'
                        }} value={message.message} required onChange={handleChangeInput} />
                    </div>
                    <div className="reply-form-row">
                        <label htmlFor="date">Date</label><br/>
                        <input type="text" name="date" id="date" 
                            value={new Date(message.createdAt).toLocaleDateString()}
                            required onChange={handleChangeInput} />
                    </div>
                    <div className="reply-form-row">
                        <label htmlFor="time">Time</label><br/>
                        <input type="text" name="time" id="time" 
                            value={new Date(message.createdAt).toLocaleTimeString()}
                            required onChange={handleChangeInput} />
                    </div>
                    {/*<div className="reply-form-row">
                        <label htmlFor="status">Status</label>
                        <input type="text" name="status" id="status" 
                            value={message.status}
                            required onChange={handleChangeInput} />
                    </div>*/}
                    <div className="reply-form-row">
                        <label htmlFor="status">Status</label><br/>
                        <select name="status" onChange={handleChangeInput}>
                            <option>Not Read</option>
                            <option value="Read">Read</option>
                            <option value="Not Read">Not Read</option>
                        </select>
                    </div>
                    
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default ReplyMessage

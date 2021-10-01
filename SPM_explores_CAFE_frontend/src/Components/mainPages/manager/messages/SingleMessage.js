import React from 'react'
import { Link } from 'react-router-dom'

function SingleMessage({message}) {
    return (
        <>
        <tr>
            <td>{message.userName}</td>
            <td>{message.subject}</td>
            <td>{new Date(message.createdAt).toLocaleDateString()}</td>
            <td>{new Date(message.createdAt).toLocaleTimeString()}</td>
            <td>{message.status}</td>
            <td>
                <Link to={`message_detail/${message._id}`}>Click.</Link>
            </td>
        </tr>
        </>
    )
}

export default SingleMessage

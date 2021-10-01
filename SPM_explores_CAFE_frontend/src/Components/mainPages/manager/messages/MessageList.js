import React, {useContext} from 'react'
import { GlobalState } from '../../../../Globalstate'
import * as AiIcons from 'react-icons/ai'
import SingleMessage from './SingleMessage'
import ReplyMessage from './reply/ReplyMessage'
import { Link } from 'react-router-dom'

function MessageList() {
    const state = useContext(GlobalState)
    const [messages] = state.messageAPI.userMessage
    const [allMessages] = state.messageAPI.allUserMessages

    return (
        <div>
            <div className="empIcon">
                <AiIcons.AiOutlineMessage />
                <h4>Customer Feedbacks</h4>
            </div>
            <hr />

            <div className="full-message-list-page">
                <h3>We have {allMessages.length} Feedbackes </h3>
                <div className="message-page-mainGrid">
                    <div>
                        <h4>Not Read List</h4>
                        <div>
                            <table>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>User Name</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        messages.map(message => {
                                            return <SingleMessage key={message._id} message={message} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h4>Feedback List</h4>
                        <div>
                            <table>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>User Name</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allMessages.map(singlemessage => (
                                            <tr key={singlemessage._id}>
                                                <td>{singlemessage.userName}</td>
                                                <td>{singlemessage.subject}</td>
                                                <td>{new Date(singlemessage.createdAt).toLocaleDateString()}</td>
                                                <td>{new Date(singlemessage.createdAt).toLocaleTimeString()}</td>
                                                <td>{singlemessage.status}</td>
                                                
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageList

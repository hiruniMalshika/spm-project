import  {useState, useEffect} from 'react'
import axios from 'axios'

function MessageAPI() {
    const [message, setMessage] = useState([])
    const [allMsg, setAllMsg] = useState([])
    const [callback, setCallback] = useState(false)

    const getAllMessages = async () => {
        const resMsg = await axios.get('/api/allMessages')
        setAllMsg(resMsg.data)
    }

    const getReadMessageList = async () => {
        const res = await axios.get('/api/message')
        setMessage(res.data)
    }

    useEffect(() => {
        getReadMessageList()
        getAllMessages()
    }, [])

    return {
        userMessage: [message, setMessage],
        callback: [callback, setCallback],
        allUserMessages: [allMsg, setAllMsg]
    }
}
 
export default MessageAPI

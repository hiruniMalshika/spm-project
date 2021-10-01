import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DisplayUser(token) {

    const[display, setdisplay] = useState([])

    const result = async () => {
        const res = await axios.get('http://localhost:5000/user/infor', {
            headers: {Authorization: token}
            
        })
        setdisplay(res.data.display)
        console.log(res)
    }

    useEffect(()=>{
        result()
    })
   

    return {
       display: [display, setdisplay]
    }
}

export default DisplayUser


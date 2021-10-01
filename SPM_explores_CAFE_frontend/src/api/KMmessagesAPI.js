import React, { useEffect, useState } from 'react'
import axios from 'axios'

function KMmessagesAPI() {
    const [messageskm, setmessageskm] = useState([])

    useEffect(() => {
        const getmessageskm = async () => {
            const res = await axios.get('http://localhost:5000/api/messagekm')
            console.log(res)
            setmessageskm(res.data.messageskm)

        }

        getmessageskm()
    }, [setmessageskm])

    return  {
        setmessageskm: [messageskm, setmessageskm]
    }
         
            
       
}

export default KMmessagesAPI

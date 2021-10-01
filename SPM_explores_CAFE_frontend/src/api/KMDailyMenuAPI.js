// import React,  { useState, useEffect} from 'react'
// import axios from 'axios'

// function KMDailyMenuAPI() {
//     const [dailymenu, setDailyMenu] = useState([])
//     const [callback, setCallback] = useState(false)

//     useEffect(() => {
//         const getDailyMenu = async () => {
//         const res = await axios.get('http://localhost:5000/api/dailymenu')
//         setDailyMenu(res.data)
        
//     }
//         getDailyMenu()
//     }, [])

//     return {
//         dailymenu: [dailymenu, setDailyMenu]
//     }
// }

// export default KMDailyMenuAPI

import React,  { useState, useEffect} from 'react'
import axios from 'axios'

function KMDailyMenuAPI() {
    const [dailymenu, setdailymenu] = useState([])
    const [callback, setCallback] = useState(false)

    const getDailyMenu = async () => {
        const res = await axios.get('http://localhost:5000/api/dailymenu')
        setdailymenu(res.data)
        //console.log(res.data)
    }

    useEffect(() => {
        getDailyMenu()
    }, [])

    return {
        dailymenu_List: [dailymenu, setdailymenu],
        callback: [callback, setCallback]
    }
}

export default KMDailyMenuAPI

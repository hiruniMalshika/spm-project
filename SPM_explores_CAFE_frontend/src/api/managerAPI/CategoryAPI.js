import  {useState, useEffect} from 'react'
import axios from 'axios'

function CategoryAPI() {
    const [categorys, setCategorys] = useState([])
    const [dailyMenu, setDailyMenu] = useState([])
    const [callback, setCallback] = useState(false)

    const getCategories = async () => {
        const res = await axios.get('/api/category')
        setCategorys(res.data)
    }

    const getDailyMenu = async () => {
        const dailyMenu = await axios.get('/api/dailymenu')
        setDailyMenu(dailyMenu.data)
    }

    useEffect(() => {
        getCategories()
        getDailyMenu()
    }, [])

    return {
        categories: [categorys, setCategorys],
        daily_menu: [dailyMenu, setDailyMenu],
        callback: [callback, setCallback]
    }
}

export default CategoryAPI

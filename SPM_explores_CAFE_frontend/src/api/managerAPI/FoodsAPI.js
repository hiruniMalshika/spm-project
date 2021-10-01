import  {useState, useEffect} from 'react'
import axios from 'axios'

function FoodsAPI() {
    const [foods, setFoods] = useState([])
    const [callback, setCallback] = useState(false)

    const getFoodsList = async () => {
        const res = await axios.get('/api/foods')
        setFoods(res.data.foods)
    }

    useEffect(() => {
        getFoodsList()
    }, [])

    return {
        foods_manager: [foods, setFoods],
        callback: [callback, setCallback]
    }
}
 
export default FoodsAPI

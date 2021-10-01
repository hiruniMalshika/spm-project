import React, {  useState, useEffect } from 'react'
import axios from 'axios'


function KMCategoriesAPI() {
    const [categories, setCategories] = useState([])

    

    useEffect(() => {
        const getCategories = async () => {
        const res = await axios.get('http://localhost:5000/api/category')
        setCategories(res.data)
    }
        getCategories()
    }, [])

    


    return {
         
            categories: [categories, setCategories]
         
    }
}

export default KMCategoriesAPI

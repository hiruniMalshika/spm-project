import {useState, useEffect} from 'react'
import axios from 'axios'

function CSOrdersAPI() {
    const [csorders, setCSOrders] = useState([])
    const [callback, setCallback] = useState(false)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(()=>{
        const getSavedOrders = async ()=>{
            const res = await axios.get(`/api/csorder?limit=${page*9}&${sort}&customername[regex]=${search}`)
            setCSOrders(res.data.csorders)
            setResult(res.data.result)
        }
        getSavedOrders()
    }, [callback, sort, page, search])


    return {
        csorders: [csorders, setCSOrders],
        callback: [callback, setCallback],
        search: [search, setSearch],
        sort: [sort, setSort],
        page:[page, setPage],
        result:[result, setResult]
        
    }
}

export default CSOrdersAPI
